import './FormCustomer.css'
import React, {Component, useState} from "react";
import {Button,  Col, Form, InputGroup, Row} from "react-bootstrap";
import {
    EnvironmentOutlined,
     KeyOutlined,
    MailOutlined,
    PhoneOutlined,
    UserAddOutlined, UserOutlined
} from "@ant-design/icons";

function FormADDCustom() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="FormCustomer">
            <div className="d-flex justify-content-lg-center">
            <Form  noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-2">
                    <Form.Group as={Col} md="12">
                        <Form.Label><UserAddOutlined />  Full name</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                aria-describedby="inputGroupPrepend"
                                required
                                id="name"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose your Full name.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className="mb-2">
                    <Form.Group as={Col} md="6" >
                        <Form.Label><MailOutlined />  Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                placeholder="Gmail"
                                aria-describedby="inputGroupPrepend"
                                required pattern=".+@gmail\.com"
                                id="email"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose your email.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} md="6" >
                        <Form.Label><PhoneOutlined />  Phone number</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose your Phone Number.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group as={Col} md="12" >
                        <Form.Label><EnvironmentOutlined />  Address</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                aria-describedby="inputGroupPrepend"
                                required
                                id="address"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose your Address.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group as={Col} md="12" >
                        <Form.Label><UserOutlined />  Username</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                aria-describedby="inputGroupPrepend"
                                required
                                id="username"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose your Username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className="mb-2">
                    <Form.Group as={Col} md="6" >
                        <Form.Label><KeyOutlined />  Password</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="password"
                                aria-describedby="inputGroupPrepend"
                                required
                                id="password"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose your Password.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                        <Form.Label><KeyOutlined /> Repeat your Password</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="password"
                                aria-describedby="inputGroupPrepend"
                                required
                                id="password_other"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please repeat your Password.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit</Button>
            </Form>
            </div>
        </div>

    );
}


class FormCustomer extends Component{
    render() {

        return(
            <FormADDCustom/>
        );
    }
}

export default FormCustomer;