import {useLocation, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {instance} from "../../api/axiosConfig";
import AccountReceipt from "./Adapter/AccountReceipt";
import UserReceipt from "./Adapter/UserReceipt";


const mock = {
    accountUser: {
        account: {
            id: 3552,
            name: "Личный счет",
            dateCreated: "2023-09-04",
        },
        user: {
            id: 2552,
            identity: {
                id: 2552,
                surname: "Иванов",
                name: "Александр",
            },
            login: "alex",
            role: "ROLE_USER",
        },
        weight: 1.0,
        permission: "ACCOUNT_CREATOR",
        id: 3302,
    },
    receiptList: [
        {
            receiptId: 1,
            date: "11/05/2023",
            account: {
                account: {
                    id: 3552,
                    name: "Личный счет",
                    dateCreated: "2023-09-04",
                },
                user: {
                    id: 2552,
                    identity: {
                        id: 2552,
                        surname: "Иванов",
                        name: "Александр",
                    },
                    login: "alex",
                    role: "ROLE_USER",
                },
                weight: 1.0,
                permission: "ACCOUNT_CREATOR",
                id: 3302,
            },
            shop: {
                name: "Хуета",
            },
            total: 25.0,
            positionList: [
                {
                    positionId: 8,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
                {
                    positionId: 7,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
                {
                    positionId: 6,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
                {
                    positionId: 5,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
                {
                    positionId: 4,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
                {
                    positionId: 3,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
                {
                    positionId: 2,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
                {
                    positionId: 1,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
            ],
        },{
            receiptId: 1,
            date: "11/05/2023",
            account: {
                account: {
                    id: 3552,
                    name: "Личный счет",
                    dateCreated: "2023-09-04",
                },
                user: {
                    id: 2552,
                    identity: {
                        id: 2552,
                        surname: "Иванов",
                        name: "Александр",
                    },
                    login: "alex",
                    role: "ROLE_USER",
                },
                weight: 1.0,
                permission: "ACCOUNT_CREATOR",
                id: 3302,
            },
            shop: {
                name: "Залупа",
            },
            total: 50.0,
            positionList: [
                {
                    positionId: 8,
                    name: "хуй без масла\n",
                    price: 10.0,
                    category: {
                        categoryId: 2,
                        categoryName: "Сухофрукты",
                    },
                },
                {
                    positionId: 7,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
                {
                    positionId: 6,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
                {
                    positionId: 5,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
                {
                    positionId: 4,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 2,
                        categoryName: "Сухофрукты",
                    },
                },
                {
                    positionId: 3,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
                {
                    positionId: 2,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
                {
                    positionId: 1,
                    name: "Сыр брынза\n",
                    price: 10.0,
                    category: {
                        categoryId: 1,
                        categoryName: "Выпивка",
                    },
                },
            ],
        }
    ],
};

const mock1 = [
    {
        "categoryId": 1,
        "categoryName": "Выпивка"
    },
    {
        "categoryId": 2,
        "categoryName": "Сухофрукты"
    }
]




const ReceiptPage = ()=>{
    const location = useLocation();
    const [data, setData] = useState(mock);
    const [categories, setCategories] = useState(mock1)

    const changeData = (newData) =>{
        setData(newData)
    }
    const [result, setResult] = useState();

/*
    const fetchData = async () => {
        try {
            const response1 = await instance.get(location.pathname);
            setData(response2.data);
            const response2 = await instance.get("categories/all");
            setCategories(response2.data);

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
            <AccountReceipt data = {data} changeData = {changeData} categories = {categories} setCategories ={setCategories} ></AccountReceipt>
        )
    }else{
        return (
            <UserReceipt data = {data} changeData = {changeData} ></UserReceipt>
        )
    }
}

export default ReceiptPage;