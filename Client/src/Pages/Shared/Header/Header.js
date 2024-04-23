import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import "./Header.css";
import Loading from "../Loading/Loading";
import useRole from "../../../Hooks/useRole";

const Header = () => {
  const [user] = useAuthState(auth);
  let [role, roleLoading] = useRole(user);
  const navigate = useNavigate()

  //   if (roleLoading) {
  //       return <Loading />;
  //   }
  const handleSignOut = () => {
    signOut(auth);
    navigate('/login')
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="white"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt=""></img>
            {/* <span className='text-dark ms-2 fw-bold'>Travelu</span> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto fw-bolder navbar">
              <div className="nav-item">
                <Nav.Link className="nav--link" href="/">
                  HOME
                </Nav.Link>
              </div>
              <div className="nav-item">
                <Nav.Link className="nav--link" as={Link} to="about">
                  ABOUT US
                </Nav.Link>
              </div>
              <div className="nav-item">
                <Nav.Link className="nav--link" as={Link} to="contact">
                  CONTACT
                </Nav.Link>
              </div>
              {user && role !== "admin" && (
                <>
                  {" "}
                  <div className="nav-item">
                    <Nav.Link className="nav--link" as={Link} to="cars">
                      CARS
                    </Nav.Link>
                  </div>
                  <div className="nav-item">
                    <Nav.Link className="nav--link" as={Link} to="services">
                      SERVICES
                    </Nav.Link>
                  </div>
                </>
              )}

              {role === "admin" && (
                <>
                  {" "}
                  <div className="nav-item">
                    <Nav.Link className="nav--link" as={Link} to="inventories">
                      INVENTORIES
                    </Nav.Link>
                  </div>
                  <div className="nav-item">
                    <Nav.Link className="nav--link" as={Link} to="manageitems">
                      MANAGE ITEMS
                    </Nav.Link>
                  </div>
                  <div className="nav-item">
                    <Nav.Link className="nav--link" as={Link} to="additem">
                      ADD ITEM
                    </Nav.Link>
                  </div>
                </>
              )}

              {user ? (
                <div className="nav-item">
                  <Nav.Link className="nav--link" onClick={handleSignOut}>
                    LOG OUT
                  </Nav.Link>
                </div>
              ) : (
                <div className="nav-item">
                  <Nav.Link className="nav--link" as={Link} to="login">
                    LOG IN
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
