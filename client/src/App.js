import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom'
import ALoad from './components/ALoad';
import LoadForm from './components/LoadForm';
import LoadList from './components/LoadList';
import UpdateLoad from './components/UpdateLoad';
import Banner from './components/Banner'

const {useState} = require("react");

function App() {
  const [loads, setLoads] = useState([]);
  return (
    <div className="App">
      <Banner/>
      <BrowserRouter>
        <Routes>
          <Route element = {<LoadList loads = {loads} setLoads = {setLoads}/>} path = "/home"/>
          <Route element = {<LoadForm loads = {loads} setLoads = {setLoads}/>} path = "/loads/new"/>
          <Route element = {<ALoad/>} path = "/loads/:id"/>
          <Route element = {<UpdateLoad/>} path = "/loads/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
