import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Headerfile = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Nav Opstion</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
                {/* <MDBNavbarLink active aria-current="page" href="home">Home</MDBNavbarLink> */}
              </MDBNavbarItem>
              <Link className="nav-link" to="/features">
                Features
              </Link>
              <MDBNavbarItem>
                {/* <MDBNavbarLink href="features">Features</MDBNavbarLink> */}
              </MDBNavbarItem>
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
              {/* <MDBNavbarLink href="pricing">Pricing</MDBNavbarLink> */}
              <MDBNavbarItem>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                {/* <MDBNavbarLink href="about">About</MDBNavbarLink> */}
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="nav-link" to="/examples">
                  Examples
                </Link>
                {/* <MDBNavbarLink href="about">About</MDBNavbarLink> */}
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <MDBBtn color="primary">Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Headerfile;
