import { Container, Form, Button, Modal } from "react-bootstrap";
import { useMutation } from "react-query";
import { API } from "../config/api";
import React, { useState } from "react";

function Daftar({ show, showDaftar }) {
  const handleClose = () => showDaftar(false);

  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    no_hp: "",
    address: "",
  });

  const {fullName, username, email, password, gender, no_hp, address} = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/register", form);

      console.log("Register Success Maszzheee : ", response);
        
      setForm({
        fullName: "",
        username: "",
        email: "",
        password: "",
        gender: "",
        no_hp: "",
        address: "",
      });
    } catch (error) {
      console.log("Register failed :", error);
    }
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Container className="">
        <Form onSubmit={(e) => handleSubmit.mutate(e)}>
          <h2 className="text-danger text-center fw-bold my-3">Daftar</h2>
          <Form.Group className="mb-3" controlId="FullName">
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleChange}
              name="fullName"
              className="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="username">
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
              className="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              className="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              className="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2"
            />
          </Form.Group>
          <Form.Select
            className="mb-3"
            aria-label="Default select example"
            name="gender"
            value={gender}
            onChange={handleChange}
          >
            <option hidden>Jenis Kelamin</option>
            <option value="Pria">Pria</option>
            <option value="Perempuan">Wanita</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="telp">
            <Form.Control
              type="number"
              placeholder="Telp"
              name="no_hp"
              value={no_hp}
              onChange={handleChange}
              className="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Control
              as="textarea"
              placeholder="Address"
              name="address"
              value={address}
              onChange={handleChange}
              rows={3}
              className="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2"
            />
          </Form.Group>
          <Button
            variant="danger"
            type="submit"
            className="rounded-pill fw-bold bg-gradient w-100 my-4"
          >
            Daftar
          </Button>
        </Form>
      </Container>
    </Modal>
  );
}

export default Daftar;
