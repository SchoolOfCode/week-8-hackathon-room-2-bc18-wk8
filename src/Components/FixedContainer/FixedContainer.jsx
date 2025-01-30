import CardContainer from "../CardComponent/Card.jsx";
import FixedExpense from "./FixedExpense/FixedExpense.jsx";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function FixedContainer({ getFixedExpenses }) {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Rent", amount: 1000 },
    { id: 2, name: "Utilities", amount: 100 },
  ]);

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
    handleClose();
  };

  return (
    <>
      <CardContainer
        content={
          <>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
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
                      onChange={(e) =>
                        setExpenseAmount(parseInt(e.target.value))
                      }
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
            {expenses.map((expense) => (
              <FixedExpense
                key={expense.id}
                name={expense.name}
                amount={expense.amount}
              />
            ))}
            <button onClick={handleShow}>Add a new Expense</button>
          </>
        }
      />
    </>
  );
}

FixedContainer.propTypes = {
  expenses: PropTypes.array,
  setExpenses: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default FixedContainer;
