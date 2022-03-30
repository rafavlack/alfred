import React, {Component} from "react";
import {Button, Card, Carousel, Container} from "react-bootstrap";
import carrousel1 from "../images/carrousel/carrousel_1.jpeg";
import carrousel2 from "../images/carrousel/carrousel_2.jpeg";
import carrousel3 from "../images/carrousel/carrousel_3.jpg";
import carrousel4 from "../images/carrousel/carrousel_4.jpg";
import carrousel5 from "../images/carrousel/carrousel_5.jpg";
import casco from "../images/casco.jpg";
import mouse from "../images/mouse_keyboard.jpg";
import silla from "../images/silla.jpg";


class Home extends Component{
    render() {
        return(
            <div className="body">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carrousel1}
                            alt="img_carrousel"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carrousel2}
                            alt="img_carrousel"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carrousel3}
                            alt="img_carrousel"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carrousel4}
                            alt="img_carrousel"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carrousel5}
                            alt="img_carrousel"
                        />
                    </Carousel.Item>
                </Carousel>

                <Container id="body_container">
                    <div className="d-flex justify-content-between">
                        <Card style={{ background:"#A29E50", width: '18rem'}}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71IA+MeLP2L._AC_SY300_SX300_.jpg" alt="image_from_amazon" />
                            <Card.Body>
                                <Card.Title> ASUS ROG Strix Scar 15 (2022) - Portátil para juegos</Card.Title>
                                <Card.Text>
                                    <li>Pantalla IPS FHD de 15.6 pulgadas y 300 Hz</li>
                                    <li>NVIDIA GeForce RTX 3060, Intel Core i9 12900H</li>
                                    <li>16 GB DDR5, 512 GB SSD, teclado RGB por tecla</li>
                                    <li> Windows 11 Home, G533ZM-ES93</li>
                                    <br/>
                                    <b>Precio:	US$1,799.99</b>
                                </Card.Text>
                                <Button variant="success"><a href="https://www.amazon.com/-/es/ASUS-ROG-Strix-Scar-G533ZM-ES93/dp/B09RMW61KQ/ref=sr_1_13?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=16BPWZXLQIXPC&keywords=gaming+laptop&qid=1648306886&sprefix=gaming+laptop%2Caps%2C441&sr=8-13" target="_blank" rel="noopener noreferrer">
                                    Go Amazon
                                </a>
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ background:"#A29E50", width: '18rem' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_SX450_.jpg" alt="image_from_amazon"/>
                            <Card.Body>
                                <Card.Title> Acer Predator Helios 300 PH315-54-760S</Card.Title>
                                <Card.Text>
                                    <li>Laptop para juegos </li>
                                    <li>Intel i7-11800H </li>
                                    <li>GPU NVIDIA GeForce RTX 3060 portátil </li>
                                    <li>Pantalla IPS Full HD 144Hz 3ms </li>
                                    <li>DDR4 de 16 GB </li>
                                    <li>SSD de 512 GB </li>
                                    <li> Killer WiFi 6 </li>
                                    <li>Teclado RGB> </li>
                                    <br/>
                                    <b>Precio:	US$1,269.00</b>
                                </Card.Text>
                                <Button variant="success">
                                    <a  href="https://www.amazon.com/-/es/Predator-PH315-54-760S-i7-11800H-port%C3%A1til-Pantalla/dp/B092YHJLS6/ref=sr_1_2?keywords=gaming+laptop&qid=1648305368&s=computers-intl-ship&sprefix=gam%2Ccomputers-intl-ship%2C1074&sr=1-2" target="_blank" rel="noopener noreferrer">
                                        Go Amazon
                                    </a>
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card style={{background:"#A29E50", width: '18rem' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81KyhfcoB4L._AC_SX450_.jpg" alt="image_from_amazon" />
                            <Card.Body>
                                <Card.Title>HP - Pavilion 15.6" Laptop para videojuegos</Card.Title>
                                <Card.Text>
                                    <li>AMD Ryzen 5</li>
                                    <li>8GB de memoria</li>
                                    <li>NVIDIA GeForce GTX 1650</li>
                                    <li> 256GB SSD</li>
                                    <li> Shadow Black</li>
                                    <br/>
                                    <b>US$733.76</b>
                                </Card.Text>
                                <Button variant="success">
                                    <a href="https://www.amazon.com/-/es/HP-Pavilion-videojuegos-memoria-GeForce/dp/B08P6MRZBG/ref=sr_1_36?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=16BPWZXLQIXPC&keywords=gaming+laptop&qid=1648307500&sprefix=gaming+laptop%2Caps%2C441&sr=8-36" target="_blank" rel="noopener noreferrer">
                                        Go Amazon
                                    </a>
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div id="second_cards">
                        <div className="d-flex justify-content-between">
                            <Card style={{background:"#A29E50", width: '18rem' }}>
                                <Card.Img variant="top" src={casco} />
                                <Card.Body>
                                    <Card.Title>MSI Gamer Laptop</Card.Title>
                                    <Card.Text>
                                        BENGOO G9000 Auriculares estéreo para juegos PS4 PC Xbox One PS5 Controller,
                                        cancelación de ruido sobre la oreja auriculares con micrófono, luz LED,
                                        sonido envolvente de bajo, orejeras de memoria suave para portátil Mac Nintendo NES Games
                                    </Card.Text>
                                    <Button variant="success">Go Amazon</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{background:"#A29E50", width: '18rem' }}>
                                <Card.Img variant="top" src={mouse} />
                                <Card.Body>
                                    <Card.Title>MSI Gamer Laptop</Card.Title>
                                    <Card.Text>
                                        Redragon S107 - Juego de teclado y mouse para videojuegos con tacto
                                        mecánico RGB, retroiluminado de 3200 DPI para PC con Windows
                                        (juego de alfombrilla de ratón para teclado)
                                    </Card.Text>
                                    <Button variant="success">Go Amazon</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{background:"#A29E50", width: '18rem' }}>
                                <Card.Img variant="top" src={silla} />
                                <Card.Body>
                                    <Card.Title>MSI Gamer Laptop</Card.Title>
                                    <Card.Text>
                                        YSSOA Respaldo y asiento ajustable en altura giratoria,
                                        silla de videojuegos, silla ergonómica para computadora de oficina, con reposapiés, color rojo
                                        Marca: YSSOA
                                    </Card.Text>
                                    <Button variant="success">Go Amazon</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>);
    }
}

export default Home;