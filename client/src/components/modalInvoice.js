import { Container, Modal, Row, Col } from "react-bootstrap";
import Qr from "../assets/img/qr.png";

import { API } from "../config/api";
import { useQuery } from "react-query";

function ModalInvoice({ show, showInvoice, id }) {
  const handleClose = () => showInvoice(false);
  console.log("ini id ayanggg", id)

  let { data: transaction } = useQuery(["transaction", id], async () => {
    const response = await API.get(`/transactions/${id}`);
    return response.data.data;
  });

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
            <h5 className="fw-bold">{transaction?.ticket.name_train}</h5>
            <p>{transaction?.ticket.type_train}</p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={8}>
            <p className="fw-bold">{transaction?.ticket.start_time}</p>
            <p>21 Februari 2020</p>
          </Col>
          <Col>
            <p className="fw-bold">Jakarta (GMR)</p>
            <p>Station {transaction?.ticket.start_station.name}</p>
          </Col>
        </Row>

        <Row className="">
          <Col md={8}>
            <p className="fw-bold">{transaction?.ticket.arival_time}</p>
            <p>21 Februari 2020</p>
          </Col>
          <Col>
            <p className="fw-bold">Surabaya (SBY)</p>
            <p>Station {transaction?.ticket.destination_station.name}</p>
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
            <p>{transaction?.user.fullName}</p>
          </Col>
          <Col>
            <p>{transaction?.user.no_hp}</p>
          </Col>
          <Col>
            <p>{transaction?.user.no_hp}</p>
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
