import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../assets/graphics/full-name-logo.svg';

class MenuNavbar extends Component {

    render() {
        return (
            <Navbar inverse fixedTop={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><img src={logo} alt="logo" height={20}/></a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem className="ahamono to-uppercase" href="/">
                        Resume
                    </NavItem>
                    <NavItem className="ahamono to-uppercase" href="/">
                        Code
                    </NavItem>
                    <NavItem className="ahamono to-uppercase" href="/">
                        Writing
                    </NavItem>
                    <NavItem className="ahamono to-uppercase" href="/">
                        Gaming
                    </NavItem>
                    <NavItem className="ahamono to-uppercase" href="/">
                        Meta
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default MenuNavbar;