import {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import {useParams} from "react-router-dom";
import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import ReceiptModal from "../ReceiptModal";
import ImageModal from "./Image/ImageModal";

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


const EmptyReceipt = {
    receiptId: '',
    date: '',
    shop: {
        name: '',
    },
    total: 0,
    positionList: [
        {
            positionId: '',
            name: '',
            price: '',
            category: {
                categoryId: '',
                categoryName: '',
            },
        }
    ]
}


const NewModal = () => {

    let accountid = useParams();

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newReceipt, changeReceipt] = useState(EmptyReceipt);

    const [inputFields, setInputFields] = useState(newReceipt.positionList)

    const [showInputModal, changeInputShow] = useState(false)

    const [categories, setCategories] = useState(mock1)

    const [imageModalState, setImageModalState] = useState(false)

    const showImage =  () => {
        handleModalClose()
        setImageModalState(true)
    }

    const showInput = () =>{
        closeImage()
        changeInputShow(true)
    }

    const closeImage = () =>{
        setImageModalState(false)
    }


    const changeMode = true

    const handleModalClose = () => {
        changeInputShow(false);
    }

    const confirm = () => {

        handleModalClose()
    }

    return (
        <>
            <ImageModal newReceipt={newReceipt} state={imageModalState} close={closeImage} setNewReceipt={changeReceipt} />

            <ReceiptModal receipt={newReceipt} confirm={confirm} handle={handleModalClose} changeMode={changeMode}
                          state={showInputModal} categories={categories} changeInputFields={setInputFields}
                          inputFields={inputFields} setCurrReceipt={changeReceipt}/>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Выберите вариант создания</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Title className="m-2"> Вариант 1 </Card.Title>
                                <Card.Body>
                                    <Button onClick={(e) => showInput()}> Нажми на меня</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Title className="m-2"> Вариант 2 </Card.Title>
                                <Card.Body>
                                    <Button onClick={(e) => showImage()} >Сканировать с фото</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Отмена
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewModal