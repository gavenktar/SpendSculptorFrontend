import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const UserTable = ({userList, permission}) => {
    return (
        <>
        {(permission === "ACCOUNT_CREATOR" || permission === "ACCOUNT_ADMIN") && (
            <Button className="m-2 text-lg-center" >Добавить пользователя</Button>
        )
        }
        <Table className="border-1" bordered border={2} striped hover>
            <thead>
            <tr>
                <th>Фамилия и имя пользователя</th>
                <th>Роль в аккаунте</th>
                <th>Проценты</th>
                {(permission === "ACCOUNT_CREATOR" || permission === "ACCOUNT_ADMIN") && (
                    <th>Удалить пользователя</th>
                )}
            </tr>
            </thead>
            <tbody>
            {userList.map((item, index) => (
                <tr key={index}>
                    <td>{item.user.identity.name + " " + item.user.identity.surname}</td>
                    <td>{item.permission}</td>
                    <td>{parseFloat(item.weight) * 100}%</td>
                    {(permission === "ACCOUNT_CREATOR" || permission === "ACCOUNT_ADMIN") && (
                        <td>
                            <Button>Удалить пользователя</Button>
                        </td>
                    )
                    }
                </tr>
            ))}

                </tbody>
        </Table>
            </>
    );
};

export default UserTable;
