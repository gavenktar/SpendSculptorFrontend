import {useLocation, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {instance} from "../../api/axiosConfig";
import AccountReceipt from "./Adapter/AccountReceipt";
import UserReceipt from "./Adapter/UserReceipt";



const ReceiptPage = ()=>{
    const location = useLocation();
    const [data, setData] = useState(mock);

    const changeData = (newData) =>{
        setData(newData)
    }
    const [result, setResult] = useState();

/*
    const fetchData = async () => {
        try {
            const response = await instance.get(location.pathname);
            setData(response.data);
        } catch (error) {
            console.error("Ошибка при загрузке данных", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);



 */
    if (location.pathname.includes("account")){
        return (
            <AccountReceipt data = {data} changeData = {changeData} ></AccountReceipt>
        )
    }else{
        return (
            <UserReceipt data = {data} changeData = {changeData} ></UserReceipt>
        )
    }
}

export default ReceiptPage;