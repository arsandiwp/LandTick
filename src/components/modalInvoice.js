import { Container, Modal, Row, Col } from "react-bootstrap";
import Qr from "../assets/img/qr.png";

function ModalInvoice({ show, showInvoice }) {
  const handleClose = () => showInvoice(false);
  return (
    <Modal show={show} size="lg" onHide={handleClose}>
      <Container className="rounded">
        <div className="my-5">
          <h1>INVOICE</h1>
          <p>Kode Invoice: INV0101</p>
        </div>
        <Row className="">
          <Col md={8}>
            <h5 className="fw-bold">Kereta Api</h5>
            <p>Saturday, 21 Februari 2020</p>
          </Col>
          <Col>
            <img src={Qr} className="" alt="Qr" />
            <p className="">TCK0101</p>
          </Col>
        </Row>

        <Row className="">
          <Col>
            <h5 className="fw-bold">Argo Wilis</h5>
            <p>Eksekutif (H)</p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={8}>
            <p className="fw-bold">05.00</p>
            <p>21 Februari 2020</p>
          </Col>
          <Col>
            <p className="fw-bold">Jakarta (GMR)</p>
            <p>Stasiun Gambir</p>
          </Col>
        </Row>

        <Row className="">
          <Col md={8}>
            <p className="fw-bold">10.05</p>
            <p>21 Februari 2020</p>
          </Col>
          <Col>
            <p className="fw-bold">Surabaya (SBY)</p>
            <p>Stasiun Surabaya</p>
          </Col>
        </Row>

        <Row className="fw-bold border-top">
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

        <Row className="border-bottom">
          <Col>
            <p>673601012200538</p>
          </Col>
          <Col>
            <p>Anto</p>
          </Col>
          <Col>
            <p>082293429168</p>
          </Col>
          <Col>
            <p>Anto@mail.com</p>
          </Col>
        </Row>

        <Row className="bg-body-secondary py-2">
          <Col md={9}>
            <h5 className="fw-bold">Total</h5>
          </Col>
          <Col>
            <h5 className="fw- bold text-warning">Rp.250.000</h5>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
}

export default ModalInvoice;
