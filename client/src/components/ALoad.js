import axios from 'axios'
const {useState, useEffect} = require("react")
const { useParams, useNavigate, Link } = require("react-router-dom")

const ALoad = (props) => {
    const [aLoad, setALoad] = useState({});
    const [loads, setLoads] = useState({});
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

    useEffect(() => {
        axios.get('http://localhost:8000/api/loads/' + id)
            .then(res => {setALoad(res.data)})
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
                            <th>Endorsements</th>
                            <th>Weight</th>
                            <th>Distance</th>
                            <th>Starting Address</th>
                            <th>Ending Address</th>
                            <th>Pay</th>
                            <th>Accept Load</th>
                        </tr>
                        <tr>
                            <td>{aLoad.load}</td>
                            <td>{aLoad.type}</td>
                            <td>{aLoad.endorsements}</td>
                            <td>{aLoad.weight}</td>
                            <td>{aLoad.distance}</td>
                            <td></td>
                            <td></td>
                            <td>${aLoad.pay}</td>
                            <td><button onClick={(e) => acceptLoad(id)}>Accept Load</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ALoad;