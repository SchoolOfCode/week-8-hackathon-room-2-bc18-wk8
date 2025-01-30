import Card from "react-bootstrap/Card";

function CardContainer({ content }) {
  return (
    <Card>
      <Card.Body>{content}</Card.Body>
    </Card>
  );
}

export default CardContainer;
