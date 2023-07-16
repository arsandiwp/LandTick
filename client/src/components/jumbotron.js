import { Container, Row, Col } from 'react-bootstrap';
import Iklan from '../assets/img/Iklan.png'

function Jumbotron() {
    return (
        <div className="bg-danger bg-gradient">
            <Container>
            <Row className="text-light">
                <Col className="mt-4">
                <h2 className="mb-4">Selamat Pagi, Ticket Seekers !</h2>
                <p>Ingin Pulkam dengan Good Deal ?<br></br>Masuk atau Daftar Sekarang !!</p>
                </Col>
                <Col className="">
                <img
                    src={Iklan}
                    width=""
                    height=""
                    className="mx-auto mt-4 mb-5"
                    alt="Iklan"
                />
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Jumbotron;