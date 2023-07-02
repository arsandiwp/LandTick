import { Button, Col, Container, Row, Stack } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Error from "../assets/img/error.png"
import Qr from "../assets/img/qr.png"
// import Train from "../assets/img/Train.png"

function Invoice () {
    return (
            <Container>
                <h2 className="my-4">Invoice</h2>
                <Stack direction="horizontal" >
                    <div className="">
                        {/* Invoice  */}
                        <Row className="bg-body-secondary border rounded" style={{width:"95%"}}>
                            <Col md={2} className="mt-2">
                            <img
                                src={Error}
                                className="d-block mx-auto mt-3"
                                alt="error"
                            />
                            </Col>
                            <Col md={10}>
                                <p>Silahkan melakukan pembayaran melalui M-Banking, E-Banking dan ATM ke No.rek Yang Tertera.</p>
                                <p>No.rek : 673601012200538</p>
                            </Col>
                        </Row>

                        <div className="mt-4 border p-2 d-block rounded" style={{width:"95%"}}>
                            {/* <Row>
                                <Col>
                                <img
                                    src={Train}
                                    className="d-inline-block align-top"
                                    alt="Brand"
                                />{" "}
                                Land <span className="text-warning ">Tick</span>
                                </Col>
                            </Row> */}

                            <Row className=""> 
                                <Col>
                                    <p>No. Tanda Pengenal</p>
                                </Col>
                                <Col>
                                    <p>Nama Pemesan</p>
                                </Col>
                                <Col>
                                    <p>No. Handphone</p>
                                </Col>
                                <Col>
                                    <p>Email</p>
                                </Col>
                            </Row>

                            <Row className="" style={{width:""}}>
                                <Col>
                                    <p className="text-secondary">673601012200538</p>
                                </Col>
                                <Col>
                                    <p className="text-secondary">kminchelle</p>
                                </Col>
                                <Col>
                                    <p className="text-secondary">082293429168</p>
                                </Col>
                                <Col>
                                    <p className="text-secondary">kminchelle@mail.com</p>
                                </Col>
                            </Row>
                        </div>
                        {/* Invoice */}
                        
                        <h2 className="my-4">Rincian Harga</h2>

                        <Row className="border py-3" style={{width:"50%"}}>
                            <Col>
                                <p>Argo Wilis (Dewasa)x1</p>
                            </Col>

                            <Col >
                                <p>Rp.250.000</p>
                            </Col>
                        </Row>

                        <Row className="border bg-body-secondary" style={{width:"50%"}}>
                            <Col>
                                <p>Total</p>
                            </Col>
                            <Col>
                                <p className="fw-bold">Rp.250.000</p>
                            </Col>
                        </Row>

                        <Row className="border mt-3" style={{width:"50%"}}>
                            <Col style={{padding:"0", margin:"0"}}>
                                <Button variant="warning" className="bg-gradient w-100">Bayar Sekarang</Button>
                            </Col>
                        </Row>
                    </div>

                    <div className="" style={{width:"35%" , marginTop:"-170px"}}>
                        <Row className="border bg-body-secondary">
                            <Col md={9} className="p-2">
                                <h4>Kereta Api</h4>
                                <p>Saturday, 21 Februari 2020</p>
                            </Col>
                            <Col>
                            <img
                                src={Qr}
                                className="mt-2"
                                alt="Qr Code"
                            />
                            <p>INV0101</p>
                            </Col>
                        </Row>

                        <Row className=""> 
                            <Col>
                                <h4>Argo Wilis</h4>
                                <p>Eksekutif (H)</p>
                            </Col>
                        </Row>

                        <Row className="">
                            <Col md={7}>
                                <h6>05.00</h6>
                                <p>21 Februari 2020</p>
                            </Col>
                            <Col>
                                <h6>Jakarta (GMR)</h6>
                                <p>Stasiun Gambir</p>
                            </Col>
                        </Row>

                        <Row className="">
                            <Col md={7}>
                                <h6>10.05</h6>
                                <p>21 Februari 2020</p>
                            </Col>
                            <Col>
                                <h6>Surabaya (SBY)</h6>
                                <p>Stasiun Surabaya</p>
                            </Col>
                        </Row>
                    </div>
                    {/* <div className="p-2">Third item</div> */}
                </Stack>
            </Container>
    );
};

export default Invoice;