import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Income({ getIncome }) {
  function handleSubmit(value) {
    getIncome(value);
  }

  return (
    <>
      <InputGroup className="mb-3 vw-50">
        <InputGroup.Text>£</InputGroup.Text>
        <Form.Control
          aria-label="Amount (to the nearest pound)"
          placeholder="Enter Income"
          onChange={(e) => handleSubmit(e.target.value)}
        />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
    </>
  );
}

export default Income;
