import { Button, Container, Form } from "react-bootstrap";

function TambahTiket () {
    return (
        <Container>
            <h2 className="my-4">Tambah Tiket</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Nama Kereta" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Tanggal Keberangkatan" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Stasiun Keberangkatan" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Jam Keberangkatan" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Stasiun Tujuan" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Jam Tiba" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Harga Ticker" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Qty" />
            </Form.Group>
            <Button variant="warning" className="bg-gradient w-100 my-3" type="submit">Save</Button>
            </Form>
        </Container>
    );
};

export default TambahTiket;