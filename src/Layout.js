import { Outlet, Link} from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React, { Component } from 'react'
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'


export class Layout extends Component {
  render() {
    return (
    <div> 
    <Navbar id="navBar">
          <Container>
              <Nav className="justify-content-end">
                <LinkContainer to="/">
                  <Nav.Link><h3 className="mainTitle" id="navbarheads">MARKDOWN PREVIEWER</h3></Nav.Link>
                </LinkContainer>
               
              </Nav>
              <Nav>
              <LinkContainer to="/About">
                  <Nav.Link><h7 id="navbarheads">ABOUT</h7></Nav.Link>
                </LinkContainer>
              <LinkContainer to="/Help">
                  <Nav.Link><h7 id="navbarheads">HELP</h7></Nav.Link>
                </LinkContainer>
              </Nav>
          </Container>
      </Navbar>
      <Outlet/>
      <footer>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h7>&copy; 2023 MARKDWON PREVIEWER.</h7> 
        <br></br>
       <h7> All rights reserved.</h7>
      </div>
      <div class="col-md-4">
        <h7>VERSION 1.0.0</h7>
      </div>
      <div class="col-md-4">
        <h7>CONTACT US:</h7>
        <ul>
          <ul>Email: support@MarkdownPreviewer.com</ul>
          <ul></ul>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </div>
    )
  }
}

export default Layout
