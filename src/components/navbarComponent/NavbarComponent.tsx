import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbarComponent.css";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavbarComponent() {
  return (
    <div className="sticky">
      <Navbar className="navbar">
        <Nav>
          <Nav.Link className="navLink left-margin" to={"/"} as={NavLink}>
            home
          </Nav.Link>
          <Nav.Link className="navLink" to={"/login"} as={NavLink}>
            login
          </Nav.Link>
          <Nav.Link className="navLink" to={"/sign up"} as={NavLink}>
            sign up
          </Nav.Link>
          <Nav.Link className="navLink" to={"/products"} as={NavLink}>
            products
          </Nav.Link>
          <Nav.Link className="navLink" to={"/categories"} as={NavLink}>
            categories
          </Nav.Link>
          <Nav.Link className="navLink" to={"/cart"} as={NavLink}>
            <ShoppingCartIcon />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
