import React from "react";import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function Topbar() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand as={Link} to="/">
						Navbar
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/current-conditions">
							Current Conditions
						</Nav.Link>
						{/* Aggiungi altri link se necessario */}
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Topbar;
