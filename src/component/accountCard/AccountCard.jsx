import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";


const AccountCard = (props)=>{
    if (props === undefined) return;
    return(
        <Card className="m-2 border-2 mw-100" style={{minWidth: 200}}>
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>

                {props.item.dateCreated && <Card.Text>Создан {props.item.dateCreated}</Card.Text>

                }
                <Button variant="primary " style={{maxWidth: 200}} className="m-2">
                    <NavLink className="nav-link" to={`/account/${props.item.id}`}>Перейти в меню счета</NavLink>
                </Button>
                <Button variant="primary" style={{maxWidth: 200}}>
                    <NavLink className="nav-link" to="/">Выйти из счета</NavLink>
                </Button>
            </Card.Body>
        </Card>
    )
}

export default AccountCard