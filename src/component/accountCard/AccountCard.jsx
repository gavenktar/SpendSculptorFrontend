import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";
import { newAccountFakeObject } from "../../constants/Constants"

const AccountCard = (props)=>{
    let item;
    if (props === undefined) return;

    if (props.item === newAccountFakeObject) {
        return (
            <Card className="m-2 border-2 mw-100 flex-grow-1" style={{minWidth: 200}}>
                <Card.Body>
                    <Card.Title>Создать новый счет</Card.Title>
                    <Button variant="primary " style={{maxWidth: 200}} className="m-2">
                        <NavLink className="nav-link" to={`/account/new`}>Создать новый счет</NavLink>
                    </Button>
                </Card.Body>
            </Card>
        )
    }
    return(
        <Card className="m-2 border-2 mw-100 flex-grow-1" style={{minWidth: 200}}>
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>

                {props.item.dateCreated && <Card.Text>Создан {props.item.dateCreated}</Card.Text> }
                <Button variant="primary " style={{maxWidth: 200}} className="m-2">
                    <NavLink className="nav-link" to={`/account/${props.item.id}`}>Перейти в меню счета</NavLink>
                </Button>
                <Button variant="primary " style={{maxWidth: 200}} className="m-2">
                    <NavLink className="nav-link" to={`/addreceipt/${props.item.id}`}>Добавить чек</NavLink>
                </Button>
                <Button variant="primary" style={{maxWidth: 200}}>
                    <NavLink className="nav-link" to="/">Выйти из счета</NavLink>
                </Button>
            </Card.Body>
        </Card>
    )
}

export default AccountCard