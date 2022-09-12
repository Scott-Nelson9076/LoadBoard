import axios from 'axios'
const {useState, useEffect} = require("react")
const { useParams, useNavigate, Link } = require("react-router-dom")

const ALoad = (props) => {
    const [aLoad, setALoad] = useState({});
    const [loads, setLoads] = useState({});
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
    const {id} = useParams();
    const navigate = useNavigate();
    const remove = loadId => {
        setLoads(loads.filter(aLoad => aLoad._id !== loadId))
    }

    const acceptLoad = (loadId) => {
        axios.delete('http://localhost:8000/api/loads/' + loadId)
            .then(res => remove(loadId),navigate('/home'))
            .catch(err => console.log(err))
    }

    const goHome = (e) => {
        e.preventDefault()
        navigate("/home")
    }

    const goEdit = (e) => {
        e.preventDefault()
        navigate("/loads/edit/" + id)
    }

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

    return(
        <div>
            <h2 className = "font-weight-bold">Load Details For {aLoad.load} </h2>
            <div className = "container">
                <table className = "table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>Load</th>
                            <th>Type</th>
                            <th>Endorsements Required</th>
                            <th>Weight</th>
                            <th>Distance</th>
                            <th>Starting Address</th>
                            <th>Ending Address</th>
                            <th>Pay</th>
                            <th>Accept Load</th>
                        </tr>
                        <tr>
                            <td>{load}</td>
                            <td>{type}</td>
                            <td>{endorsements}</td>
                            <td>{weight}</td>
                            <td>{distance}</td>
                            <td>{startingAddress.startingStreetAddress}, {startingAddress.startingCity}, {startingAddress.startingState}, {startingAddress.startingZip}</td>
                            <td>{endingAddress.endingStreetAddress}, {endingAddress.endingCity}, {endingAddress.endingState}, {endingAddress.endingZip}</td>
                            <td>${pay}</td>
                            <td><button className ="btn btn-success" onClick={(e) => acceptLoad(id)}>Accept Load</button></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button className ="btn btn-success" onClick={goHome}>Home</button>
                    <button className ="btn btn-danger" style={{margin:20}} onClick = {goEdit}>Edit This Load</button>
                </div>
            </div>
        </div>
    )
}

export default ALoad;