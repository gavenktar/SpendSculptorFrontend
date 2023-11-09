import {useState} from "react";
import ReceiptTable from "../ReceiptTable";


const AccountReceipt = ({data, changeData, setCategories , categories})=>{

    const [receiptList, setReceiptList] = useState(data.receiptList);

    let access = {};
    access[data.accountUser.account.id] = data.accountUser.permission;
    let weight = {}
    weight[data.accountUser.account.id] = data.accountUser.weight;
    const setList = (list) =>{
        let newData = data
        newData.receiptList = list
        setReceiptList(list)
        changeData (newData)
    }

    return (
        <ReceiptTable receiptList = {receiptList} setList = {setList} categories = {categories } setCategories = {setCategories} userid = {data.accountUser.user.id} permission = {access}  weight={weight} />
    )
}

export default AccountReceipt