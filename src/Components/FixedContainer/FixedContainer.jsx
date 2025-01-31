import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import "./FixedContainer.css";

function FixedContainer({ getFixedExpenses }) {
  const [expenses, setExpenses] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);

  useEffect(() => {
    let sum = 0;

    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].amount === "") {
        expenses[i].amount = 0;
      }
      sum += expenses[i].amount;
    }
    getFixedExpenses(sum);
  }, [expenses, getFixedExpenses]);

  const handleSubmit = () => {
    setExpenses([
      ...expenses,
      { id: expenses.length + 1, name: expenseName, amount: expenseAmount },
    ]);
    setExpenseName("");
    setExpenseAmount(0);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Fixed Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formExpenseName">
              <Form.Label>Expense Name</Form.Label>
              <Form.Control
                onChange={(e) => setExpenseName(e.target.value)}
                type="text"
                placeholder="Type in an expense"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Expense Amount</Form.Label>
              <Form.Control
                onChange={(e) => setExpenseAmount(parseInt(e.target.value))}
                type="number"
                placeholder="Type in an expense amount"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="expenses-container">
        {expenses.map((expense) => (
          <Card key={expense.id} className="mb-2 expense-card">
            <Card.Body>
              <Card.Title>{expense.name}</Card.Title>
              <Card.Text>£{expense.amount}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        <Button className="button" variant="primary" onClick={handleShow}>
          Add Expense
        </Button>
      </div>
    </>
  );
}

FixedContainer.propTypes = {
  getFixedExpenses: PropTypes.func.isRequired,
};

export default FixedContainer;
