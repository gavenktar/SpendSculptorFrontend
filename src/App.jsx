import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Home from './component/home/Home'
import Auth from './component/auth/auth'
import {useState} from "react";
import Accounts from "./component/Accounts/Accounts";


function App() {


    const [headerData, setHeaderData] = useState(null)

    const updateHeaderState  = (newHeaderData) =>{
        setHeaderData(newHeaderData);
    }


    return (
        <div className="App">
                <Header headerData = {headerData} />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/auth"  element={<Auth updateHeaderState = {updateHeaderState} />}/>
                    <Route path="/accounts" element={<Accounts/>} />
                </Routes>
        </div>
    );
}

export default App;
