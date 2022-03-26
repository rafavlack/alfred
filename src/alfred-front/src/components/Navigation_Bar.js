import React, {Component} from "react";
import logo_imagen from "../images/logo.png";
import {
    GithubOutlined,
    LinkedinOutlined,
    LoginOutlined,
    MailOutlined,
    ShoppingCartOutlined,
    UserAddOutlined
} from "@ant-design/icons";
import {Button, Navbar, OverlayTrigger, Tooltip} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import FormCustomer from "./FormCustomer";

const renderTooltip = (props) => (
    <Tooltip id="icon-tooltip" {...props}>
       Sing Up
    </Tooltip>
);

const renderTooltip1 = (props) => (
    <Tooltip id="icon-tooltip" {...props}>
       Login
    </Tooltip>
);

class Navigation_Bar extends Component{
    render() {
        return(
            <Router>
                <Navbar id="navbar">
                    <Link to="/" >
                        <Navbar.Brand>
                        <img id="logo"
                             alt="logo"
                             src={logo_imagen}
                             className="d-inline-block align-top"/>
                        </Navbar.Brand >
                    </Link>

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <div id="operaciones_nav">

                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <Link to="/addCustomer"> <UserAddOutlined /></Link>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip1}
                                >
                                    <Link to="/addCustomer"><LoginOutlined/></Link>
                                </OverlayTrigger>
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <div id="social_net_nav">
                                <a href="mailto:rafavlack@gmail.com"><MailOutlined/></a>
                                <a  href="https://github.com/rafavlack/"  target="_blank" rel="noopener noreferrer"><GithubOutlined/></a>
                                <a href="https://www.linkedin.com/in/rafael-barrientos-holder-666a6912a/"  target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/addCustomer" element={<FormCustomer />} />
                </Routes>
            </Router>

        );
    }
}

export default Navigation_Bar;