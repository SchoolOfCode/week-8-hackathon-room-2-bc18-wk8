import CardContainer from "../CardComponent/Card.jsx";
import FixedExpense from "./FixedExpense/FixedExpense.jsx";
import { useState } from "react";
import PropTypes from "prop-types";

function FixedContainer() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Rent", amount: 1000 },
    { id: 2, name: "Utilities", amount: 100 },
  ]);

  const handleSubmit = () => {
    setExpenses([...expenses, <FixedExpense />]);
  };

  return (
    <>
      <CardContainer
        content={
          <>
            {expenses.map((expense) => (
              <FixedExpense
                key={expense.id}
                name={expense.name}
                amount={expense.amount}
              />
            ))}
            <button onClick={handleSubmit}>Add a new Expense</button>
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
