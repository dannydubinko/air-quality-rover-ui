import MapCard from "./MapCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BuildingDash() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <MapCard />
          <br />
          <MapCard />
        </Row>
      </Container>
    </div>
  );
}

export default BuildingDash;
