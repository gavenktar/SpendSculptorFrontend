import './App.css';
import Header from './component/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Home from './component/home/Home'
import Auth from './component/auth/auth'
import {useState} from "react";
import Accounts from "./component/Accounts/Accounts";
import AccountForm from "./component/Accounts/AccountForm";
import AccountPage from "./component/Accounts/AccountPage";
import ReceiptPage from "./component/Receipt/Page/ReceiptPage";
import {LineElement} from "chart.js";
import NewModal from "./component/Receipt/New/NewModal";


function App() {


    const [headerData, setHeaderData] = useState(localStorage.getItem("username"))

    const updateHeaderState  = (newHeaderData) =>{
        setHeaderData(newHeaderData);
    }


    return (
        <div className="App">
                <Header headerData = {headerData} updateData={updateHeaderState} />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/auth"  element={<Auth updateHeaderState = {updateHeaderState} />}/>
                    <Route path="/accounts" element={<Accounts/>} />
                    <Route path="/account/new" element={<AccountForm />} />
                    <Route path="/account/:id" element={<AccountPage/>}/>
                    <Route path="/account/:id/receipts" element = {<ReceiptPage />}/>
                    <Route path="/account/:id/receipt/new" element={<NewModal/>} />
                </Routes>
        </div>
    );
}

export default App;
