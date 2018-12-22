import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../assets/graphics/full-name-logo.svg';
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MenuNavbar extends Component {

    render() {
        return (
            <Navbar inverse fixedTop collapseOnSelect fluid={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><img src={logo} alt="logo" height={20}/></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem className="ahamono to-uppercase" href="/">
                            <FontAwesomeIcon icon={faFilePdf} /> Resume
                        </NavItem>
                        <NavItem className="ahamono to-uppercase" href="/">
                            <FontAwesomeIcon icon={faCodeBranch} /> Code
                        </NavItem>
                        <NavItem className="ahamono to-uppercase" href="/">
                            <FontAwesomeIcon icon={faKeyboard} /> Writing
                        </NavItem>
                        <NavItem className="ahamono to-uppercase" href="/">
                            <FontAwesomeIcon icon={faGamepad} /> Gaming
                        </NavItem>
                        <NavItem className="ahamono to-uppercase" href="/">
                            <FontAwesomeIcon icon={faBook} /> Meta
                        </NavItem>
                        <NavItem className="ahamono to-uppercase" href="/">
                            <FontAwesomeIcon icon={faEnvelope} /> Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MenuNavbar;