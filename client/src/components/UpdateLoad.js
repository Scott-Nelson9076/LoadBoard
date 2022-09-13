import { useNavigate, useParams, Link } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import axios from "axios";


const UpdateLoad = (props) => {
    const [load, setLoad] = useState("");
    const [type, setType] = useState("");
    const [endorsements, setEndorsements] = useState("");
    const [weight, setWeight] = useState("");
    const [startingAddress, setStartingAddress] = useState({
        startingCity: "",
        startingState:"",
        startingZip:"", 
        startingStreetAddress: ""
    });
    const [endingAddress, setEndingAddress] = useState({
        endingCity:"",
        endingState:"",
        endingZip:"",
        endingStreetAddress:""
    });
    const [distance, setDistance] = useState("");
    const [pay, setPay] = useState("");
    const {loads, setLoads} = props;
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/loads/' + id)
            .then(res => {
                setLoad(res.data.load)
                setType(res.data.type)
                setEndorsements(res.data.endorsements)
                setWeight(res.data.weight)
                setStartingAddress(res.data.startingAddress)
                setEndingAddress(res.data.endingAddress)
                setDistance(res.data.distance)
                setPay(res.data.pay)
            })
            .catch(err => console.log(err))
    }, [])

    const changeStartAddressCity = (e) => {
        const newVal = e.target.value;
        setStartingAddress((prevState) => {
            return {
                ...prevState,
                startingCity: newVal
            }
        })
    }

    const goHome = (e) => {
        e.preventDefault()
        navigate("/home")
    }

    const changeStartAddressState = (e) => {
        const newVal = e.target.value;
        setStartingAddress((prevState) => {
            return {
                ...prevState,
                startingState: newVal
            }
        })
    }

    const changeStartAddressZip = (e) => {
        const newVal = e.target.value;
        setStartingAddress((prevState) => {
            return {
                ...prevState,
                startingZip: newVal
            }
        })
    }

    const changeStartAddressStreetAddress = (e) => {
        const newVal = e.target.value;
        setStartingAddress((prevState) => {
            return {
                ...prevState,
                startingStreetAddress: newVal
            }
        })
    }
    const changeEndAddressCity = (e) => {
        const newVal = e.target.value;
        setEndingAddress((prevState) => {
            return {
                ...prevState,
                endingCity: newVal
            }
        })
    }

    const changeEndAddressState = (e) => {
        const newVal = e.target.value;
        setEndingAddress((prevState) => {
            return {
                ...prevState,
                endingState: newVal
            }
        })
    }

    const changeEndAddressZip = (e) => {
        const newVal = e.target.value;
        setEndingAddress((prevState) => {
            return {
                ...prevState,
                endingZip: newVal
            }
        })
    }

    const changeEndAddressStreetAddress = (e) => {
        const newVal = e.target.value;
        setEndingAddress((prevState) => {
            return {
                ...prevState,
                endingStreetAddress: newVal
            }
        })
    }

    const editLoad = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/loads/' + id, {
            load,
            type,
            endorsements,
            weight,
            startingAddress,
            endingAddress,
            distance,
            pay
        })
        .then(res => {console.log(res);
            navigate("/home")
        })
        .catch(err => {const errorResponse = err.response.data.errors; const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }
    return (
        <div className = "container">
        <h1>Update Load Details</h1>
        <form onSubmit={editLoad} className = "form">
        {errors.map((err,index) => <div key = {index}>{err}</div>)}
        <h2>Load Details:</h2>
        <div className = "form-row">
            <label>Load:</label>
            <input value = {load}  className ="form-control" type = "text" onChange={(e) => setLoad(e.target.value)}/>
        </div>
        <div className = "form-row">
            <label>Type:</label>
            <input value = {type} className = "form-control" type = "text" onChange={(e) => setType(e.target.value)}/>
        </div>
        <div className = "form-row" >
            <label>Endorsements Required:</label>
            <input value = {endorsements} className = "form-control" type = "text" onChange = {(e) => setEndorsements(e.target.value)}/>
        </div>
        <div className = "form-row">
            <label>Weight:(In lbs)</label>
            <input value = {weight} className = "form-control" type = "number" onChange={(e) => setWeight(e.target.value)}/>
        </div>
        <div className = "form-row">
            <h2>Starting Address:</h2>
            <div className = "form-row">
                <label>Starting City:</label>
                <input value = {startingAddress.startingCity} className = "form-control" type = "text" onChange = {changeStartAddressCity}/>
            </div>
            <div className = "form-row">
                <label>Starting State:</label>
                <input value = {startingAddress.startingState} className = "form-control" type = "text" onChange = {changeStartAddressState}/>
            </div>
            <div className = "form-row">
                <label>Starting Zip:</label>
                <input  value = {startingAddress.startingZip} className = "form-control" type = "number" onChange={changeStartAddressZip}/>
            </div>
            <div className = "form-row">
                <label>Starting Street Address:</label>
                <input value = {startingAddress.startingStreetAddress} className = "form-control" type = "text" onChange={changeStartAddressStreetAddress}/>
            </div>
            
        </div>
        <div className = "form-group">
            <h2>Ending Address:</h2>
            <div className = "form-group" >
                <label>Ending City:</label>
                <input value = {endingAddress.endingCity} className = "form-control" type = "text" onChange = {changeEndAddressCity}/>
            </div>
            <div className = "form-group">
                <label>Ending State:</label>
                <input value = {endingAddress.endingState} className = "form-control" type = "text" onChange = {changeEndAddressState}/>
            </div>
            <div className = "form-group">
                <label>Ending Zip:</label>
                <input value = {endingAddress.endingZip} className = "form-control" type = "number" onChange={changeEndAddressZip}/>
            </div>
            <div className = "form-group">
                <label>Ending Street Address:</label>
                <input value = {endingAddress.endingStreetAddress} className = "form-control" type = "text" onChange={changeEndAddressStreetAddress}/>
            </div>
        </div>
        <h2>Distance And Pay:</h2>
        <div className = "form-group" >
            <label>Distance:(In Miles)</label>
            <input value = {distance} className = "form-control" type = "number" onChange={(e) => setDistance(e.target.value)}/>
        </div>
        <div className = "form-group">
            <label>Pay:(In USD)</label>
            <input value = {pay} className = "form-control" type = "number" onChange={(e) => setPay(e.target.value)}/>
        </div>
        <div>
            _________
        </div>
        <div>
            <button className ="btn btn-success">Update Load</button>
        </div>
        </form>
        <div>
        <button style = {{margin:20}} className = "btn btn-success" onClick={goHome}>Home</button>
        </div>
    </div>
    )

}

export default UpdateLoad