import ListTiket from "../components/listTiket";
import { Row, Col, Container } from "react-bootstrap";

function ListTransaksi() {
  return (
    <div>
      <Container>
        <h1 className="my-4">List Tiket</h1>
        <Row>
          <Col>
            <p>No</p>
          </Col>
          <Col>
            <p>Users</p>
          </Col>
          <Col>
            <p>Tiket</p>
          </Col>
          <Col>
            <p>Bukti Transfer</p>
          </Col>
          <Col>
            <p>Status Payment</p>
          </Col>
          <Col>
            <p>Action</p>
          </Col>
        </Row>
      </Container>

      <ListTiket
        no="1"
        user="Anto"
        tiket="Surabaya - Jakarta"
        bukti="bca.jpg"
        status="pending"
      />
      <ListTiket
        no="2"
        user="Bastian"
        tiket="Jakarta - Malang"
        bukti="bni.jpg"
        status="pending"
      />
      <ListTiket
        no="3"
        user="Amin"
        tiket="Jakarta - Bandung"
        bukti="permata.jpg"
        status="pending"
      />
      <ListTiket
        no="4"
        user="Haris"
        tiket="Sumedang - Jakarta"
        bukti="permata.jpg"
        status="pending"
      />
      <ListTiket
        no="5"
        user="Aziz"
        tiket="Jakarta - Serang"
        bukti="bi.jpg"
        status="pending"
      />
      <ListTiket
        no="6"
        user="Sugeng"
        tiket="Jakarta - Serang"
        bukti="bni.jpg"
        status="pending"
      />
    </div>
  );
}

export default ListTransaksi;
