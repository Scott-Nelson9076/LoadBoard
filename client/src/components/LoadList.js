import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
const {useEffect, useState} = require("react");

const LoadList = (props) => {
    const {loads, setLoads} = props;
    const navigate = useNavigate();
    const classes = 'table table-bordered'

    const addNew = (e) => {
        e.preventDefault()
        navigate("/loads/new")
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/loads')
        .then((res) => {setLoads(res.data)})
        .catch((err) => {console.log(err);})
    }, [])

    return (
        <div>
            <h2>Loads Available</h2>
            <div className = "container">
                <table className = "table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>Load</th>
                            <th>Load Type</th>
                            <th>Endorsements Required</th>
                            <th>Weight</th>
                            <th>Distance (In Miles)</th>
                            <th>Pay (In USD)</th>
                        </tr>
                        {loads.map((load, index) => {return <tr key = {index} className = "table-striped">
                            <td><Link to = {'/loads/' + load._id}>{load.load}</Link></td>
                            <td>{load.type}</td>
                            <td>{load.endorsements}</td>
                            <td>{load.weight}</td>
                            <td>{load.distance}</td>
                            <td>${load.pay}</td>
                        </tr>})}
                    </tbody>
                </table>
            </div>
            <div>
                <button className = "btn-success" onClick={addNew}>Add A Load To The Board</button>
            </div>
        </div>
    )
}

export default LoadList