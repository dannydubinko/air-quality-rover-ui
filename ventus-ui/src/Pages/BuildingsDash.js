import MapCard from "./MapCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BuildingDash() {
  return (
    <div className="App">
      <h1 color="black">Alpha Maps (Public)</h1>
      <p color="black">
        The following maps are publicly available and result from the testing of
        the Ventus Robotics Air Quality Rover.{" "}
      </p>

      <Container>
        <Row>
          <MapCard />
        </Row>
      </Container>
    </div>
  );
}

export default BuildingDash;
