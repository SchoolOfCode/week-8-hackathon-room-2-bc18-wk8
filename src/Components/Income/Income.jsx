import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Income.css";

function Income({ getIncome }) {
  function handleSubmit(value) {
    getIncome(value);
  }

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <InputGroup
              className="mb-3"
              style={{ width: "600px", height: "100px" }}
            >
              <InputGroup.Text style={{ fontSize: 25 }}>£</InputGroup.Text>
              <Form.Control
                className="income-input"
                aria-label="Amount (to the nearest pound)"
                placeholder="Enter Income"
                style={{ fontSize: 25 }}
                type="number"
                onChange={(e) => handleSubmit(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Income;
