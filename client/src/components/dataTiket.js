import { Col, Container, Row } from "react-bootstrap";
import Arrow from "../assets/img/Arrow.png";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import Login from "../pages/login";
import Daftar from "../pages/daftar";
import ModalData from "./modalData";

import { useQuery } from "react-query";
import { API, setAuthToken } from "../config/api";


function DataTiket() {

  setAuthToken(localStorage.token);

  let { data: tickets } = useQuery("ticketsCache", async () => {
    const response = await API.get("/tickets");
    return response.data.data;
  });

  const handleBuy = async (id) => {
    try {
      const formData = new FormData()
      formData.set("ticket_id", id)
      const response = await API.post("/transaction", formData);
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

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
      {tickets?.map((data, index) => (
        <Row
          className="border pt-2 mb-4"
          style={{ cursor: "pointer" }}
          key={index}
          onClick={() => {
            !state.isLogin ? setShowLogin(true) : setShowData(true);
            handleBuy(data.id);
          }}
        >
          <Col className="">
            <p className="fw-bold">{data.name_train}</p>
            <p>{data.type_train}</p>
          </Col>
          <Col className="">
            <p className="fw-bold">{data.start_time}</p>
            <p>{data.start_station.name}</p>
          </Col>
          <Col className="">
            <img src={Arrow} width="" height="" className="mt-4" alt="arrow" />
          </Col>
          <Col className="">
            <p className="fw-bold">{data.arival_time}</p>
            <p>{data.destination_station.name}</p>
          </Col>
          <Col className="">
            <p className="fw-bold">5 Jam</p>
          </Col>
          <Col md={4} className="">
            <p className="fw-bold text-danger">Rp. 250.000</p>
          </Col>
        </Row>
      ))}
      ;
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
