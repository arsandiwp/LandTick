import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Train from "../assets/img/Train.png"

function Tiketsaya () {
    return (

            <Container className="">
                <h2 className="my-4">Tiket Saya</h2>
                <div className="mx-auto shadow bg-body rounded p-3" style={{width:"90%"}}>
                    <Row className=" ">
                        <Col md={4} className="fw-bold">
                        <img
                             src={Train}
                            className="d-inline-block align-top"
                             alt="Brand"
                            />{" "}
                            Land <span className="text-warning">Tick</span>
                        </Col>
                        <Col md={{ span: 4, offset: 4 }} className="text-end">
                            <h3>Kereta Api</h3>
                            <p>Saturday, 21 Februari 2020</p>
                        </Col>
                    </Row>

                    <Row className="" style={{marginTop:"-20px"}}>
                        <Col md={3}>
                            <h4>Argo Wilis</h4>
                            <p>Eksekutif (H)</p>
                        </Col>
                        <Col md={3}>
                            <h5>05.00</h5>
                            <p className="text-secondary">21 Februari 2020</p>
                        </Col>
                        <Col md={3}>
                            <h5>Jakarta (GMR)</h5>
                            <p className="text-secondary">Stasiun Gambir</p>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={3} className="">
                            <p className="">Pending</p>
                        </Col>
                        <Col md={3}>
                            <h5>10.05</h5>
                            <p className="text-secondary">21 Februari 2020</p>
                        </Col>
                        <Col md={3}>
                            <h5>Surabaya (SBY)</h5>
                            <p className="text-secondary">Stasiun Surabaya</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p>No. Tanda Pengenal</p>
                        </Col>
                        <Col>
                            <p>Nama Pemesanan</p>
                        </Col>
                        <Col>
                            <p>No Handphone</p>
                        </Col>
                        <Col>
                            <p>Email</p>
                        </Col>
                        <Col>
                        </Col>
                        <hr className="" style={{width:"80%", marginTop:"-10px"}}></hr>
                    </Row>

                    <Row className="text-secondary" style={{marginTop:"-10px"}}>
                        <Col>
                            <p>673601012200538</p>
                        </Col>
                        <Col>
                            <p>kminchelle</p>
                        </Col>
                        <Col>
                            <p>082293429168</p>
                        </Col>
                        <Col>
                            <p>kminchelle@mail.com</p>
                        </Col>
                        <Col>
                            <Link to={"/invoice"}>
                                <Button variant="warning" type="submit" className="bg-gradient w-100">Bayar Sekarang</Button>                            
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
    );
};

export default Tiketsaya;