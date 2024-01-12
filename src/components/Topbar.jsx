import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function Topbar() {
	const containerStyle = {
		margin: 0,
		marginLeft: "15px",
	};
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container style={containerStyle}>
					<Navbar.Brand as={Link} to="/">
						⛈🌪MeteoVittoria🌧🌤
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/current-conditions">
							Condizioni Meteo Attuali
						</Nav.Link>
						<Nav.Link as={Link} to="/forecasting">
							Previsioni
						</Nav.Link>
						{/* Aggiungi altri link se necessario */}
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Topbar;
