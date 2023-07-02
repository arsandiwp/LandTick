import { Col, Container, Row } from "react-bootstrap";
import Arrow from "../assets/img/Arrow.png";
// import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DataKereta } from "../context/dataKeretaContext";
import { UserContext } from "../context/userContext";
import Login from "../pages/login";
import Daftar from "../pages/daftar";
import ModalData from "./modalData";

function DataTiket() {
  const konsumer = useContext(DataKereta);
  console.log(konsumer);

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(UserContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showDaftar, setShowDaftar] = useState(false);
  const [showData, setShowData] = useState(false);

  return (
    <Container className="text-center mt-5">
      <Row className="my-3">
        <Col>
          <p>Nama kereta</p>
        </Col>
        <Col>
          <p>Berangkat</p>
        </Col>
        <Col></Col>
        <Col>
          <p>Tiba</p>
        </Col>
        <Col>
          <p>Durasi</p>
        </Col>
        <Col md={4}>
          <p>Harga Per Orang</p>
        </Col>
      </Row>
      {konsumer.map((data) => (
        <Row
          className="border pt-2 mb-4"
          style={{ cursor: "pointer" }}
          key={data.id}
          onClick={
            !state.isLogin ? () => setShowLogin(true) : () => setShowData(true)
          }
        >
          <Col className="">
            <p className="fw-bold">{data.namaKereta}</p>
            <p>{data.class}</p>
          </Col>
          <Col className="">
            <p className="fw-bold">{data.berangkat}</p>
            <p>{data.stasiunAwal}</p>
          </Col>
          <Col className="">
            <img src={Arrow} width="" height="" className="mt-4" alt="arrow" />
          </Col>
          <Col className="">
            <p className="fw-bold">{data.tiba}</p>
            <p>{data.stasiunAkhir}</p>
          </Col>
          <Col className="">
            <p className="fw-bold">{data.durasi}</p>
          </Col>
          <Col md={4} className="">
            <p className="fw-bold text-warning">Rp. 250.000</p>
          </Col>
        </Row>
      ))}

      <Login
        show={showLogin}
        showLogin={setShowLogin}
        showDaftar={setShowDaftar}
      />
      <Daftar show={showDaftar} showDaftar={setShowDaftar} />
      <ModalData show={showData} showData={setShowData} />
    </Container>
  );
}

export default DataTiket;
