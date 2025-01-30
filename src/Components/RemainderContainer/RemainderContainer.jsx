import CardContainer from "../CardComponent/Card.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function RemainderContainer({ income, fixedExpenses }) {
  let incomeInt = parseInt(income);
  let expensesInt = parseInt(fixedExpenses);

  function calculateRemainder(income, expenses) {
    return income - expenses - 100;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Card style={{ maxWidth: "400px", marginTop: "20px" }}>
            <Card.Header>Remainder</Card.Header>
            <Card.Body>
              <Card.Text>£{calculateRemainder(incomeInt, expensesInt)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RemainderContainer;
