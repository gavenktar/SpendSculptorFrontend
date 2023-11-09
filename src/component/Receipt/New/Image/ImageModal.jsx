import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import {Form, Spinner} from "react-bootstrap";
import {useState} from "react";

const ImageModal = ( {newReceipt, setNewReceipt, state, close}  ) => {


    const [isLoading, setIsLoading] = useState(false); // Состояние для отслеживания загрузки
    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        // Здесь выполняйте загрузку на сервер, например, с использованием Axios
        // После завершения загрузки, установите состояние загрузки обратно в false

        // Пример с использованием setTimeout для имитации загрузки
        setTimeout(() => {
            setIsLoading(false);
            close(); // Закройте модальное окно после завершения загрузки
        }, 2000); // Здесь 2000 миллисекунд - это имитация времени загрузки, замените на фактическую загрузку
    };

    return(  <Modal show={state} onHide={close}>
        <Modal.Header closeButton>
            <Modal.Title>Загрузите фотографию и нажмите отправить</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {isLoading ? ( // Проверка состояния загрузки
                <div className="text-center">
                    <Spinner animation="border" />
                    <p>Идет загрузка...</p>
                </div>
            ) : (
                <Form className="m-2" onSubmit={handleSubmit}>
                    <Form.Control
                        accept="image/jpeg, image/png, image/gif"
                        className="m-2"
                        type="file"
                        placeholder="Загрузите фото"
                    />
                    <Button variant="primary" type="submit">
                        Отправить фото
                    </Button>
                </Form>
            )}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={close}>
                Отмена
            </Button>
        </Modal.Footer>
    </Modal>
);
};

export default ImageModal