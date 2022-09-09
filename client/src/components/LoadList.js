import {Link} from 'react-router-dom';
import axios from 'axios';
const {useEffect, useState} = require("react");

const LoadList = (props) => {
    const {loads, setLoads} = props;
    
    const classes = 'table table-bordered'

    useEffect(() => {
        axios.get('http://localhost:8000/api/loads')
        .then((res) => {setLoads(res.data)})
        .catch((err) => {console.log(err);})
    }, [])

    return (
        <div>
            <h1>Loads Available</h1>
            <div className = "container">
                <table className = "table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>Load</th>
                            <th>Load Type</th>
                            <th>Endorsements</th>
                            <th>Weight</th>
                            <th>Distance</th>
                            <th>Pay</th>
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
        </div>
    )
}

export default LoadList