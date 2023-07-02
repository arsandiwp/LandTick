import { Container, Row, Col } from "react-bootstrap";
import Search from "../assets/img/search.png"
import Edit from "../assets/img/edit.png"
import Trash from "../assets/img/trash.png"
import { useState } from "react";
import ModalApproval from "./modalApproval";
import ModalInvoice from "./modalInvoice";

function ListTiket (props) {
    const [showApproval, setShowApproval] = useState(false);
    const [showInvoice, setShowInvoice] = useState(false);

    return (
        <>
        <Container>
            <Row className="mt-4">
                <Col>
                    <p>{props.no}</p>
                </Col>
                <Col>
                    <p>{props.user}</p>
                </Col>
                <Col>
                    <p>{props.tiket}</p>
                </Col>
                <Col>
                    <p>{props.bukti}</p>
                </Col>
                <Col>
                    <p className="text-warning">{props.status}</p>
                </Col>
                <Col className="">
                    <img
                    src={Search}
                    className="me-3"
                    alt="search"
                    onClick={() => setShowInvoice(true)}
                    style={{cursor:"pointer"}}                    
                    /> 
                    <img
                    src={Edit}
                    className="me-3"
                    alt="edit"
                    onClick={() => setShowApproval(true)}
                    style={{cursor:"pointer"}}
                    /> 
                    <img
                    src={Trash}
                    className="me-3"
                    alt="tarsh"
                    />
                </Col>
            </Row>
        </Container>

        <ModalApproval 
        show={showApproval}
        showApproval={setShowApproval}
        />

        <ModalInvoice
        show={showInvoice}
        showInvoice={setShowInvoice}
        />

        </>
    );
};

export default ListTiket; 