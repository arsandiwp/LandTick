import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Train from "../assets/img/myticket.png";

import { useQuery } from "react-query";
import { API } from "../config/api";

function Tiketsaya() {
  let navigate = useNavigate();

  let { data: myTicket } = useQuery("TicketCache", async () => {
    const response = await API.get("/transaction-user");
    return response.data.data;
  });
  console.log(myTicket);

  const handleBuy = async (id) => {
    try {
      const response = await API.get(`/transactions/${id}`)
      navigate(`/invoice/${id}`)
      return response.data.data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className="">
      <h2 className="my-4">Tiket Saya</h2>
      {myTicket?.map((data, index) => (
        <div
          className="mx-auto shadow bg-body rounded p-3"
          style={{ width: "90%" }}
        >
          <Row className="" key={index}>
            <Col md={4} className="">
              <img
                src={Train}
                className="d-inline-block align-top ps-3 pe-5 bg-danger bg-gradient"
                alt="Brand"
                style={{ borderEndEndRadius: 50, marginTop:"-15px"}}
              />
            </Col>
            <Col md={{ span: 4, offset: 4 }} className="text-end">
              <h3>Kereta Api</h3>
              <p>Saturday, 21 Februari 2020</p>
            </Col>
          </Row>

          <Row className="" style={{ marginTop: "-20px" }}>
            <Col md={3}>
              <h4>{data.ticket.name_train}</h4>
              <p>{data.ticket.type_train}</p>
            </Col>
            <Col md={3}>
              <h5>{data.ticket.start_time}</h5>
              <p className="text-secondary">{data.ticket.start_date}</p>
            </Col>
            <Col md={3}>
              <h5>Jakarta (GMR)</h5>
              <p className="text-secondary">{data.ticket.start_station.name}</p>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={3} className="">
              <p className="">{data.status}</p>
            </Col>
            <Col md={3}>
              <h5>{data.ticket.arival_time}</h5>
              <p className="text-secondary">{data.ticket.start_date}</p>
            </Col>
            <Col md={3}>
              <h5>Surabaya (SBY)</h5>
              <p className="text-secondary">{data.ticket.destination_station.name}</p>
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
            <Col></Col>
            <hr className="" style={{ width: "80%", marginTop: "-10px" }}></hr>
          </Row>

          <Row className="text-secondary" style={{ marginTop: "-10px" }}>
            <Col>
              <p>673601012200538</p>
            </Col>
            <Col>
              <p>{data.user.fullName}</p>
            </Col>
            <Col>
              <p>{data.user.no_hp}</p>
            </Col>
            <Col>
              <p>{data.user.email}</p>
            </Col>
            <Col>

                <Button
                  variant="danger"
                  type="submit"
                  className="bg-gradient w-100"
                  onClick={() => handleBuy(data.id)}
                >
                  Bayar Sekarang
                </Button>

            </Col>
          </Row>
        </div>
      ))}
      ;
    </Container>
  );
}

export default Tiketsaya;
