import React, {Component} from "react";
import {Button, Card, Carousel, Container} from "react-bootstrap";
import carrousel1 from "../images/carrousel/carrousel_1.jpeg";
import carrousel2 from "../images/carrousel/carrousel_2.jpeg";
import carrousel3 from "../images/carrousel/carrousel_3.jpg";
import carrousel4 from "../images/carrousel/carrousel_4.jpg";
import carrousel5 from "../images/carrousel/carrousel_5.jpg";
import laptop from "../images/laptop.jpg";
import laptop2 from "../images/laptop2.jpg";
import laptop3 from "../images/laptop3.jpg";
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
                        <Card.Img variant="top" src={laptop} />
                        <Card.Body>
                            <Card.Title>MSI Gamer Laptop</Card.Title>
                            <Card.Text>
                                <li>Series	GF65 Thin 10SDR-1273</li>
                                <li>Marca	MSI</li>
                                <li>Usos específicos del producto	Personal, Gaming, Multimedia.</li>
                                <li>Tamaño de pantalla	15.6 Pulgadas</li>
                                <li>Sistema operativo	Windows 10 Home</li>
                                <li>Entrada de interfaz humana	Teclado</li>
                            </Card.Text>
                            <Button variant="success">Go Amazon</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ background:"#A29E50", width: '18rem' }}>
                        <Card.Img variant="top" src={laptop2} />
                        <Card.Body>
                            <Card.Title>MSI Gamer Laptop</Card.Title>
                            <Card.Text>
                                <li>Series	GF65 Thin 10SDR-1273</li>
                                <li>Marca	MSI</li>
                                <li>Usos específicos del producto	Personal, Gaming, Multimedia.</li>
                                <li>Tamaño de pantalla	15.6 Pulgadas</li>
                                <li>Sistema operativo	Windows 10 Home</li>
                                <li>Entrada de interfaz humana	Teclado</li>
                            </Card.Text>
                            <Button variant="success">Go Amazon</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{background:"#A29E50", width: '18rem' }}>
                        <Card.Img variant="top" src={laptop3} />
                        <Card.Body>
                            <Card.Title>MSI Gamer Laptop</Card.Title>
                            <Card.Text>
                                <li>Series	GF65 Thin 10SDR-1273</li>
                                <li>Marca	MSI</li>
                                <li>Usos específicos del producto	Personal, Gaming, Multimedia.</li>
                                <li>Tamaño de pantalla	15.6 Pulgadas</li>
                                <li>Sistema operativo	Windows 10 Home</li>
                                <li>Entrada de interfaz humana	Teclado</li>
                            </Card.Text>
                            <Button variant="success">Go Amazon</Button>
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