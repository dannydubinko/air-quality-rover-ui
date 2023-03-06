import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MapCard() {
  return (
    <Card className="text-center">
      <Card.Header>Beamish Munro Hall</Card.Header>
      <Card.Body>
        <Card.Title>BMH Room 109</Card.Title>
        <Card.Text>Kingston, ON</Card.Text>
        <Button variant="primary">View Air Quality Map</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        Last quality check: 2 days ago
      </Card.Footer>
    </Card>
  );
}

export default MapCard;
