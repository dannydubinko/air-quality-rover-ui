import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MapCard() {
  return (
    <Card className="text-center">
      <Card.Header>Q-PMC Building 1</Card.Header>
      <Card.Body>
        <Card.Title>Area 36-C</Card.Title>
        <Card.Text>Kingston, ON</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        Last quality check: 2 days ago
      </Card.Footer>
    </Card>
  );
}

export default MapCard;
