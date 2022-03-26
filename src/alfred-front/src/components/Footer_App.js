import React, {Component} from "react";
import {Image} from "react-bootstrap";
import icon_javadev from "../images/logo_javadev.png";
import logo_spring from "../images/logos/spring_boot_logo.png";
import logo_react from "../images/logos/logo192.png";
import logo_bootstrap from "../images/logos/bootstrap-icons.png";
import logo_ant from "../images/logos/ant-design-seeklogo.com.svg";
import {GithubOutlined, LinkedinOutlined, MailOutlined} from "@ant-design/icons";
import {Footer} from "antd/es/layout/layout";

class Footer_App extends Component{
    render() {
        return(
            <Footer id="id_footer">
                <div className="d-flex justify-content-evenly">
                    <div className="container_logo">
                        <div className="row align-items-lg-center">
                            <div className="col" align="center">
                                <Image roundedCircle={true} width={100} src={icon_javadev}/>
                            </div>

                            <div className="col" align="center">
                                <Image roundedCircle={true} width={200} src={logo_spring}/>
                            </div>
                            <div className="col" align="center">
                                <Image roundedCircle={true} width={100} src={logo_react}/>
                            </div>

                            <div className="col" align="center">
                                <Image roundedCircle={true} width={100} src={logo_bootstrap}/>
                            </div>

                            <div className="col" align="center">
                                <Image roundedCircle={true} width={100} src={logo_ant}/>
                            </div>
                        </div>
                    </div>

                    <div id="social_net">
                        <a href="mailto:rafavlack@gmail.com"><MailOutlined/></a>
                        <a  href="https://github.com/rafavlack/"  target="_blank" rel="noopener noreferrer"><GithubOutlined/></a>
                        <a href="https://www.linkedin.com/in/rafael-barrientos-holder-666a6912a/"  target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
                    </div>
                </div>
            </Footer>
        );
    }
}

export default Footer_App;