import Train from "../assets/img/Train.png";
import Transfer from "../assets/img/transfer.png"
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Tiket() {
  return (
    <Container style={{ marginTop: "-40px" }}>
      <Row className="shadow bg-body-tertiary rounded">
        <Col className=" bg-body-secondary" style={{ padding: "0", margin: "0" }}>
          <div className="bg-light mt-3">
            <img src={Train} width="" height="" className="" alt="Icon Train" />{" "}
            Tiket Kerata api
          </div>
        </Col>

        <Col md={9} className="p-3">
          <h5>Tiket Kereta Api</h5>
          <Row>
            <Form.Group as={Col}  controlId="asal" className="mt-2">
              <Form.Label>Asal</Form.Label>
              <Form.Control type="text" placeholder="Jakarta" />
            </Form.Group>

            <Col md={1}>
              <img 
                src={Transfer}
                className="bg-danger g-gradient rounded-pill p-2"
                alt="Brand"
                style={{marginTop:"35px"}}
              />
            </Col>

            <Form.Group as={Col}  controlId="tujuan" className="mt-2">
              <Form.Label>Tujuan</Form.Label>
              <Form.Control type="text" placeholder="Surabaya" />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="tglberangkat" className="mt-3">
              <Form.Label>Tanggal Berangkat</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mt-3">
              <Form.Check type="checkbox" label="Pulang Pergi" />
            </Form.Group>

            <Form.Group as={Col} controlId="dewasa" className="mt-3">
              <Form.Label>Dewasa</Form.Label>
              <Form.Select aria-label="Default select example">
                <option hidden>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="bayi" className="mt-3">
              <Form.Label>Bayi</Form.Label>
              <Form.Select aria-label="Default select example">
                <option hidden>2</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="" className="mt-5">
              <Button variant="danger" className="bg-gradient px-4 w-100">
                Cari Tiket
              </Button>
            </Form.Group>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Tiket;
