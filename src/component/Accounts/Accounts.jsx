import {CardGroup} from "react-bootstrap";
import {instance} from "../../api/axiosConfig";
import AccountCard from "../accountCard/AccountCard";
import {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";

const Accounts = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get("/accounts");
                setData(response.data);
            } catch (error) {
                console.error("Ошибка при загрузке данных", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className="m-3 display-1"> Мои счета</h1>
            <Container style={{flexGrow: '1', width: '100%'}}
                       className="d-flex justify-content-center align-items-center">
                <CardGroup aria-multiline={"true"} style={{flexGrow: '1'}}
                           className="d-flex justify-content-start m-2 flex-wrap ">
                    {
                        data.map(
                            (item) => {
                                return <AccountCard item={item}/>
                            }
                        )
                    }
                </CardGroup>
            </Container>
        </>
    )
}

export default Accounts;