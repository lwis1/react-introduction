import React,{ Component } from "react";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from "./Home";
  import About from "./About";
  import Contact from "./Contact";

export default class NavbarComp extends Component{
    render(){
        return (
            <Router>
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <NavDropdown title="others" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to={"/contact"}>contact</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                Link
                </Nav.Link>
                </Nav>
                <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
                </Navbar>
            
            </div>
            <div>
            <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
            </div>
            </Router>

        )
    }
}