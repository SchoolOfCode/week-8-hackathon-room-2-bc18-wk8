import { useState } from "react";
import Card from "react-bootstrap/Card";
import "./RemainderContainer.css";

function RemainderContainer({ income, fixedExpenses, sliderExpenses }) {
  const [remainders, setRemainders] = useState([]);

  const calculateRemainder = (income, expenses, sliderPercentages) => {
    let remainingFunds = parseInt(income) - parseInt(expenses);

    sliderPercentages.forEach((percentage) => {
      let reduction = remainingFunds * (percentage / 100);
      remainingFunds -= reduction;
    });

    return remainingFunds.toFixed(2);
  };

  return (
    <div className="remainder-container">
      <Card className="mb-2 expense-card">
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title>Remainder</Card.Title>
          <Card.Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            £{calculateRemainder(income, fixedExpenses, sliderExpenses)}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RemainderContainer;
