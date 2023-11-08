import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const UserTable = ({goalList, permission}) => {

    const calculateDiff = (date1, date2)=>{
        const timeDiff = Math.abs(date2 - date1);
        return timeDiff / (1000 * 60 * 60 * 24).toFixed(2);
    }

    const calculatePlan = (date1Str, date2Str, target) => {
        const [day1, month1, year1] = date1Str.split("-").map(Number);
        const [day2, month2, year2] = date2Str.split("-").map(Number);
        const date1 = new Date(year1, month1 - 1, day1);
        const date2 = new Date(year2, month2 - 1, day2);
        return (target/calculateDiff(date1,date2)).toFixed(2);
    }

    const calculateReal = (date1Str, curr) =>{
        const datenow = new Date();
        const [day1, month1, year1] = date1Str.split("-").map(Number);
        const date1 = new Date(year1, month1 - 1, day1);
        return (curr/calculateDiff(datenow,date1)).toFixed(2);
    }

    return (
        <>
            <Button className="m-2 text-lg-center">Добавить цель</Button>
            <Table className="border-1" bordered border={2} striped hover>
                <thead>
                <tr>
                    <th>Название цели</th>
                    <th>Дата создания</th>
                    <th>Дата окончания</th>
                    <th> Цель</th>
                    <th> Потрачено</th>
                    <th>Плановые расходы в день</th>
                    <th>Реальные расходы в день</th>
                    {(permission === "ACCOUNT_CREATOR" || permission === "ACCOUNT_ADMIN") && (
                        <th>Удалить цель</th>
                    )}
                </tr>
                </thead>
                <tbody>
                {goalList.map((item, index) => (
                    <>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.created}</td>
                            <td>{item.valid}</td>
                            <td> &lt; {item.goal}</td>
                            <td> {item.state}</td>
                            <td> {calculatePlan(item.created,item.valid,item.goal)}</td>
                            <td> {calculateReal(item.created,item.state)}</td>
                            {(permission === "ACCOUNT_CREATOR" || permission === "ACCOUNT_ADMIN") && (
                                <td>
                                    <Button>Удалить цель</Button>
                                </td>
                            )
                            }


                        </tr>
                    </>
                ))}

                </tbody>
            </Table>
        </>
    );
};

export default UserTable;
