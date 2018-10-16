import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';

class App extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
	}

	toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

	render() {
		return (
			<div id="app">
			    <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Java UI Template</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
			</div>
		)
	}

}

export default App;