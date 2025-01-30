import { useState } from "react";
import Form from "react-bootstrap/Form";

function SliderExpense({ id, onChange }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleValueChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    onChange(id, newValue);
  };

  return (
    <>
      <Form.Group>
        <Form.Control
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter expense name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          {name}: {value}
        </Form.Label>
        <Form.Range
          value={value}
          min="0"
          max="1000"
          onChange={handleValueChange}
        />
      </Form.Group>
    </>
  );
}

export default SliderExpense;
