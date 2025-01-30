import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Income({ getIncome }) {
  function handleSubmit(value) {
    getIncome(value);
  }

  return (
    <>
    <Container>
      <Row className="justify-content-center">
        <Col xs="auto">
      <InputGroup className="mb-3" style={{ maxWidth: '300px' }}>
        <InputGroup.Text>£</InputGroup.Text>
        <Form.Control
          aria-label="Amount (to the nearest pound)"
          placeholder="Enter Income"
          onChange={(e) => handleSubmit(e.target.value)}
        />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
    </Col>
    </Row>
    </Container>
    </>
  );
}

export default Income;


