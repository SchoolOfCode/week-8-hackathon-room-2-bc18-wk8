import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Income() {
  return (
    <>
      <InputGroup className="mb-3 vw-50">
        <InputGroup.Text>£</InputGroup.Text>
        <Form.Control
          aria-label="Amount (to the nearest pound)"
          placeholder="Enter Income"
        />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
    </>
  );
}

export default Income;
