import { useState } from "react";
import Form from "react-bootstrap/Form";

function SliderExpense({ id, getTotalSliderAmount }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [isEditing, setIsEditing] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleValueChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
    getTotalSliderAmount(newValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setIsEditing(false);
    }
  };

  return (
    <>
      <Form.Group>
        {isEditing ? (
          <Form.Control
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter expense name"
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          ""
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>
          {name || "Expense"}: {value}%
        </Form.Label>
        <Form.Range
          value={value}
          min="0"
          max="100"
          onChange={handleValueChange}
        />
      </Form.Group>
    </>
  );
}

export default SliderExpense;
