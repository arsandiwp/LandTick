import { useContext, useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
// import { AppContext } from "../App";

function Login({ show, showLogin, showDaftar }) {
    const handleClose = () => showLogin(false);
    const changeModal = () => {
        handleClose();
        showDaftar(true);
    }

    // men set login
    const [login, setLogin] = useState({});

    // mendapatkan value
    const handleChange = (e) => {
        setLogin({
          ...login,
          [e.target.name]: e.target.value,
        });
    };

    // routing
    const navigate = useNavigate();
    // reducer
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useContext(UserContext);

    const handeleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log(username)
        console.log(password)

        // eslint-disable-next-line no-sequences
        if (username === "admin", password === "kemem") {
            dispatch({
                type: "ADMIN_LOGIN_SUCCESS",
                status: true,
                payload: username,
            });
            navigate("/listtransaksi");
        } else {
            dispatch({
                type: "USER_LOGIN_SUCCESS",
                status: false,
                payload: username,
            });
            navigate("/")
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Container className="">
                <Form className="" onSubmit={handeleSubmit}>
                    <h2 className="text-warning text-center fw-bold my-3">Login</h2>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Control type="text" placeholder="Username" onChange={handleChange} id="username" name="username" className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Control type="password" placeholder="Password" onChange={handleChange} id="password" name="password" className="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2" />
                    </Form.Group>
                    <Button variant="warning" type="submit" className="rounded-pill fw-bold bg-gradient w-100 my-4" onClick={handleClose}>Login</Button>
                    <p className="text-center">Belum Punya Akun ? Klik <b onClick={changeModal} style={{ cursor: "pointer" }} className="text-warning">disini</b></p>
                </Form>
            </Container>
        </Modal>
    );
};

export default Login;