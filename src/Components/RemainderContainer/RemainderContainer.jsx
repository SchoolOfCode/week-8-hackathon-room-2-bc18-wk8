import CardContainer from "../CardComponent/Card.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function RemainderContainer({ income, fixedExpenses, sliderExpenses }) {
  let incomeInt = parseInt(income);
  let expensesInt = parseInt(fixedExpenses);
  const sliderExpensesArray = sliderExpenses.map((expense) =>
    parseInt(expense)
  ); // Ensure all are numbers

  function calculateRemainder(income, expenses, sliderPercentages) {
    let remainingFunds = income - expenses;

    // Apply each slider percentage sequentially
    sliderPercentages.forEach((percentage) => {
      let reduction = remainingFunds * (percentage / 100);
      remainingFunds -= reduction;
    });

    return remainingFunds;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Card style={{ maxWidth: "400px", marginTop: "20px" }}>
            <Card.Header>Remainder</Card.Header>
            <Card.Body>
              <Card.Text>
                £
                {calculateRemainder(
                  incomeInt,
                  expensesInt,
                  sliderExpensesArray
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RemainderContainer;
