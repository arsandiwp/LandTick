import { Navbar, Container, Button, Dropdown } from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import LandTick from "../assets/img/landtick.png"
import Train from "../assets/img/Train.png"
import Login from "../pages/login";
import Daftar from "../pages/daftar";

function Header() {
  // useState menerima keadaan awal dan mengembalikan dua nilai
  const [showLogin, setShowLogin] = useState(false);
  const [showDaftar, setShowDaftar] = useState(false);

  // menggunakan Context dari userContext yang sudah dibuat
  const [state, dispatch] = useContext(UserContext);

  // mengembalikan nilai state ketika login 
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <>
      <Navbar className="shadow bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold" >
            <Link to="/" style={{textDecoration:"none"}}>
              <img
                src={LandTick}
                className="d-inline-block "
                alt="Brand"
              />
              <img
                src={Train}
                className="d-inline-block "
                alt="Brand"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end gap-3">
            {/* condition ternary dimana jika status true masuk admin dan false masuk user */}
            <>
              {state.user.role === "admin" ? (
                <>
                  <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                      {state.user.username}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link to="/tambahtiket" style={{textDecoration:"none"}}>
                        <Dropdown.Item href="#/action-1">
                          Tambah Tiket
                        </Dropdown.Item>
                      </Link>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#" onClick={logout}>
                        <Link to="/" style={{textDecoration:"none"}}>Logout</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : state.isLogin ? (
                <>
                  <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                      {state.user.username}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link to="/tiketsaya" style={{textDecoration:"none"}}>
                        <Dropdown.Item href="#/action-1">
                          Tiket Saya
                        </Dropdown.Item>
                      </Link>

                      <Link to="/invoice" style={{textDecoration:"none"}}>
                        <Dropdown.Item href="#/action-2">Payment</Dropdown.Item>
                      </Link>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#" onClick={logout}>
                        <Link to="/" style={{textDecoration:"none"}}>Logout</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* condition ternary dimana jika status true masuk admin dan false masuk user */}
                </>
              ) : (
                <>
                  <Button
                    variant="outline-danger"
                    className="bg-gradient px-4"
                    onClick={() => setShowDaftar(true)}
                  >
                    Daftar
                  </Button>
                  <Button
                    variant="danger"
                    className="bg-gradient px-4"
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </Button>
                </>
              )}
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>
          
      <Login
        show={showLogin}
        showLogin={setShowLogin}
        showDaftar={setShowDaftar}
      />
      <Daftar 
        show={showDaftar} 
        showDaftar={setShowDaftar} 
      />
        
    </>
  );
}

export default Header;
