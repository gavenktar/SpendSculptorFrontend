import {Col, Form, InputGroup, Modal, ModalBody, Row, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import parseDate from "../../utils/utils";
import Button from "react-bootstrap/Button";


const ReceiptModal = ({state, receipt, changeReceipt, changeMode, inputFields, changeInputFields, confirm, handle}) => {


    const [date, setDate] = useState(parseDate(new Date(receipt.date)))
    let category = {}
    category.categoryname = ''

    const calculateTotal = (receiptList) => {
        return receipt.positionList.map(position => position.price).flat()
            .reduce((acc, price) => acc + parseFloat(price), 0);
    }

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        changeInputFields(data); // change into enum type;
        receipt.total = calculateTotal(receipt)
    }

    const save = (e) => {
        e.preventDefault();
        confirm(receipt);
    }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        changeInputFields(data)
    }


    const addField = () => {
        let category = {
        }
        category.categoryName = ''
        let newfield = {name: '', category: category, price: ''}
        changeInputFields([...inputFields, newfield]);
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }
    console.log(date)


    return (
        <Modal show={state} onHide={handle}>
            <Modal.Header closeButton>
                <Modal.Title>Чек</Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form>
                    <Form.Control type="text" value={receipt.shop.name} disabled={!changeMode}></Form.Control>
                    {!changeMode ? <Form.Control type="text" value={date} disabled></Form.Control> :
                        <Form.Control type="date" defaultValue={date} onChange={handleDate}></Form.Control>
                    }
                    <Row className="mt-2">
                        <Col sm={3}>Продукт</Col>
                        <Col sm={3}>Категория</Col>
                        <Col sm={3}>Цена</Col>
                    </Row>
                    {
                        inputFields != null && inputFields.map((item, index) => (
                            <Form>
                                <InputGroup className="mb-3 ">
                                    <Form.Control type="text" name="name" value={item.name}
                                                  onChange={event => handleFormChange(index, event)}
                                                  disabled={!changeMode}></Form.Control>
                                    <Form.Control type="text" name="category.CategoryName"
                                                  onChange={event => handleFormChange(index, event)}
                                                  value={item.category.categoryName}
                                                  disabled={!changeMode}></Form.Control>
                                    <Form.Control type="text" name="price"
                                                  onChange={event => handleFormChange(index, event)}
                                                  value={item.price} disabled={!changeMode}></Form.Control>
                                    {changeMode && <Button onClick={event => removeFields(index)}>Удалить</Button>}
                                </InputGroup>

                            </Form>
                        ))
                    }
                    <Row className="bg-light">
                        <Col>
                        </Col>
                        <Col>
                            Итого
                        </Col>
                        <Col>
                            {receipt.total}
                        </Col>
                    </Row>
                </Form>
                <Row>
                    {changeMode && <> <Button className="m-2" variant="primary" onClick={save}>
                        Save Changes
                    </Button>
                        <Button className="m-2" onClick={addField}>Add More..</Button>
                    </>
                    }
                </Row>
            </ModalBody>
        </Modal>
    )

}


export default ReceiptModal