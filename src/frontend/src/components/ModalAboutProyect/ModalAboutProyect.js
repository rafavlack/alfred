import {Button, Image, Modal, OverlayTrigger, Tooltip} from "react-bootstrap";
import React, {useState} from "react";
import { QuestionCircleOutlined} from "@ant-design/icons";
import logo from './logo_javadev.png';

const modalTooltip = (props) => (
    <Tooltip id="icon-tooltip" {...props}>
        ABOUT THE PROYECT
    </Tooltip>
);


function ModalAboutProyect() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={modalTooltip}
            >
                <QuestionCircleOutlined onClick={handleShow}/>
            </OverlayTrigger>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>About the Proyect</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={logo} width={100} height={75} />
                    This is an example project developed in collaboration with developer Sorin Bobocel, who developed the RESTFUL API with Spring Boot and MYSQL.
                    For the FrontEnd, the ReactJS library was used, as well as React-Bootstrap and Ant Design.
                    It is hosted on this server using DOCKER containers.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAboutProyect;
