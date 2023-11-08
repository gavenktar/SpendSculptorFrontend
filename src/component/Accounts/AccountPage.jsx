import {useEffect, useState} from "react";
import {instance} from "../../api/axiosConfig";
import {NavLink, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Col, Form, FormCheck, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ReceiptChart from "./AccountPage/ReceiptChart";
import UserTable from "./AccountPage/UserTable";
import GoalTable from "./AccountPage/GoalTable";
import Button from "react-bootstrap/Button";

const data = {
    "userRole": "ACCOUNT_CREATOR",
    "account": {
        "id": 3552,
        "name": "Личный счет",
        "dateCreated": "2023-09-04"
    },
    "userList": [
        {
            "account": {
                "id": 3552,
                "name": "Личный счет",
                "dateCreated": "2023-09-04"
            },
            "user": {
                "id": 2552,
                "identity": {
                    "id": 2552,
                    "surname": "Иванов",
                    "name": "Александр"
                },
                "login": "alex",
                "role": "ROLE_USER"
            },
            "weight": 1.0,
            "permission": "ACCOUNT_CREATOR",
            "id": 3302
        },
        {
            "account": {
                "id": 3552,
                "name": "Личный счет",
                "dateCreated": "2023-09-04"
            },
            "user": {
                "id": 2552,
                "identity": {
                    "id": 2552,
                    "surname": "Иванов",
                    "name": "Александр"
                },
                "login": "alex",
                "role": "ROLE_USER"
            },
            "weight": 1.0,
            "permission": "ACCOUNT_CREATOR",
            "id": 3302
        },
        {
            "account": {
                "id": 3552,
                "name": "Личный счет",
                "dateCreated": "2023-09-04"
            },
            "user": {
                "id": 2552,
                "identity": {
                    "id": 2552,
                    "surname": "Иванов",
                    "name": "Александр"
                },
                "login": "alex",
                "role": "ROLE_USER"
            },
            "weight": 1.0,
            "permission": "ACCOUNT_CREATOR",
            "id": 3302
        },
        {
            "account": {
                "id": 3552,
                "name": "Личный счет",
                "dateCreated": "2023-09-04"
            },
            "user": {
                "id": 2552,
                "identity": {
                    "id": 2552,
                    "surname": "Иванов",
                    "name": "Александр"
                },
                "login": "alex",
                "role": "ROLE_USER"
            },
            "weight": 1.0,
            "permission": "ACCOUNT_CREATOR",
            "id": 3302
        },
        {
            "account": {
                "id": 3552,
                "name": "Личный счет",
                "dateCreated": "2023-09-04"
            },
            "user": {
                "id": 2552,
                "identity": {
                    "id": 2552,
                    "surname": "Иванов",
                    "name": "Александр"
                },
                "login": "alex",
                "role": "ROLE_USER"
            },
            "weight": 1.0,
            "permission": "ACCOUNT_CREATOR",
            "id": 3302
        },

    ],
    "goalList": [
        {
            "name": null,
            "created": "08-10-2023",
            "valid": "14-11-2023",
            "goal": 4000.00,
            "state": 400.00
        },
        {
            "name": null,
            "created": "08-10-2023",
            "valid": "14-11-2023",
            "goal": 4000.00,
            "state": 400.00
        }
    ],
    "receiptList": [
        {
            "receiptId": 1,
            "date": "11-05-2023",
            "account": {
                "account": {
                    "id": 3552,
                    "name": "Личный счет",
                    "dateCreated": "2023-09-04"
                },
                "user": {
                    "id": 2552,
                    "identity": {
                        "id": 2552,
                        "surname": "Иванов",
                        "name": "Александр"
                    },
                    "login": "alex",
                    "role": "ROLE_USER"
                },
                "weight": 1.0,
                "permission": "ACCOUNT_CREATOR",
                "id": 3302
            },
            "shop": {
                "name": "Хуета"
            },
            "total": 25.00,
            "positionList": [
                {
                    "positionId": 8,
                    "name": "Сыр брынза\n",
                    "price": 10.00,
                    "category": {
                        "categoryId": 1,
                        "categoryName": "Выпивка"
                    }
                },
                {
                    "positionId": 7,
                    "name": "Сыр брынза\n",
                    "price": 10.00,
                    "category": {
                        "categoryId": 1,
                        "categoryName": "Выпивка"
                    }
                },
                {
                    "positionId": 6,
                    "name": "Сыр брынза\n",
                    "price": 10.00,
                    "category": {
                        "categoryId": 1,
                        "categoryName": "Выпивка"
                    }
                },
                {
                    "positionId": 5,
                    "name": "Сыр брынза\n",
                    "price": 10.00,
                    "category": {
                        "categoryId": 1,
                        "categoryName": "Выпивка"
                    }
                },
                {
                    "positionId": 4,
                    "name": "Сыр брынза\n",
                    "price": 10.00,
                    "category": {
                        "categoryId": 1,
                        "categoryName": "Выпивка"
                    }
                },
                {
                    "positionId": 3,
                    "name": "Сыр брынза\n",
                    "price": 10.00,
                    "category": {
                        "categoryId": 1,
                        "categoryName": "Выпивка"
                    }
                },
                {
                    "positionId": 2,
                    "name": "Сыр брынза\n",
                    "price": 10.00,
                    "category": {
                        "categoryId": 1,
                        "categoryName": "Выпивка"
                    }
                },
                {
                    "positionId": 1,
                    "name": "Сыр брынза\n",
                    "price": 10.00,
                    "category": {
                        "categoryId": 1,
                        "categoryName": "Выпивка"
                    }
                }
            ]
        }
    ],
    "weight": 1.0
};


const AccountPage = () => {


    const {id} = useParams();

    let newDate = new Date().toISOString().slice(0, 10);

    const [dateStart, setDateStart] = useState(data.account.dateCreated)
    const [dateEnd, setDateEnd] = useState(newDate);

    //const [data, setData] = useState([]);

    const [result, setResult] = useState();

    const [enabled, setEnabled] = useState(false)

    const [datalist, setDataList] = useState([])

    const filterList = () => {
        setDataList(data.receiptList.filter(item => {
                    const dateA = new Date(dateStart.replace(/-/g, '/'));
                    const dateB = new Date(dateEnd.replace(/-/g, '/'));
                    const dateC = new Date(item.date.replace(/-/g, '/'));
                    return (dateA - dateC <= 0) && (dateB - dateC >= 0)
                }
            )
        )
    }

    useEffect(() => {
        filterList();
    }, [dateStart, dateEnd]);


    const handleCheck = (e) => {
        setEnabled(!enabled);
        if (enabled === true) {
            setDateEnd(newDate);
            setDateStart(data.account.dateCreated)
        }
    }


    const handleStartDate = (e) => {
        setDateStart(e.target.value)
    }

    const handleEndDate = (e) => {
        setDateEnd(e.target.value)
    }

    if (id === undefined || id === null) return


    return (
        <div style={{width: '99%'}}>
            <Container className="p-2 flex-column flex-grow-1 m-2 w-100" fluid>
                <Row className="m-2">
                    <Col>
                        <Row>
                            <Row className="flex-grow-1 border-2 m-2 rounded-1 justify-content-md-center">
                                <Card>
                                    <Card.Title> Общая информация </Card.Title>
                                    <Card.Subtitle className="m-1"> Название {data.account.name} </Card.Subtitle>
                                    <Card.Subtitle className="m-1"> Дата
                                        создания {data.account.dateCreated}</Card.Subtitle>
                                </Card>
                            </Row>
                            <Row className="flex-grow-1 border-2 m-2 rounded-1 justify-content-md-center">
                            <Card>
                                <Card.Title > Выбрать период рассмотрения</Card.Title>
                                <Card.Body>
                                    <Form.Check
                                        type="checkbox"
                                        style={{
                                            textAlign: "start"
                                        }}
                                        name="check"
                                        label="Включить форму"
                                        className="m-2"
                                        onClick={handleCheck}
                                    />
                                    <Form name="date">
                                        <Form.Control className="m-2" value={dateStart} onChange={handleStartDate}
                                                      type="date" disabled={!enabled}></Form.Control>
                                        <Form.Control className="m-2" value={dateEnd} onChange={handleEndDate}
                                                      type="date"
                                                      disabled={!enabled}>
                                        </Form.Control>
                                    </Form>
                                </Card.Body>
                            </Card>
                            </Row>
                            <Row>
                                <Button variant="primary" className="h-100">
                                    <NavLink to="account/${id}/receipts">
                                        <text className="text-white">
                                        Перейти к чекам аккаунта
                                        </text>
                                    </NavLink>
                                </Button>
                            </Row>
                        </Row>
                    </Col>
                    <Col>
                        <Card className="rounded-1 border-2 ">
                            <Card.Title> График расходов</Card.Title>
                            <ReceiptChart receiptList={datalist} weight={data.weight}></ReceiptChart>
                        </Card>
                    </Col>
                </Row>
                <Row className="flex-row flex-wrap flex-grow-1">
                    <Col className="rounded-1 border-2 border-black mt-2">
                        <Card>
                            <Card.Title className="mt-2">
                                Пользователи </Card.Title>
                            <UserTable permission={data.userRole} userList={data.userList}></UserTable>
                        </Card>
                    </Col>
                    <Col className="rounded-1 border-2 border-black mt-2">
                        <Card>
                            <Card.Title className="mt-2"> Цели</Card.Title>
                        <GoalTable permission={data.userRole} goalList={data.goalList}></GoalTable>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default AccountPage