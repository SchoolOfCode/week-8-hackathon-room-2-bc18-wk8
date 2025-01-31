import Card from "react-bootstrap/Card";
import Income from "../Income/Income.jsx";
import FixedContainer from "../FixedContainer/FixedContainer.jsx";
import SliderContainer from "../SliderContainer/SliderContainer.jsx";
import RemainderContainer from "../RemainderContainer/RemainderContainer.jsx";
import { useState } from "react";
import "./AppContainer.css";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { LiaPiggyBankSolid } from "react-icons/lia";

function AppContainer() {
  const [income, setIncome] = useState(0);
  const [fixedExpenses, setFixedExpenses] = useState(0);
  const [totalSliderAmount, setTotalSliderAmount] = useState([]);

  function getIncome(value) {
    setIncome(value);
  }

  function getFixedExpenses(value) {
    setFixedExpenses(value);
  }

  function getTotalSliderAmount(value) {
    setTotalSliderAmount(value);
  }

  return (
    <Card className="text-center vh-100 vw-100">
      <Card.Header className="header" style={{ backgroundColor: "#a3dff7" }}>
        <p className="logo">
          {
            <LiaPiggyBankSolid
              style={{
                fontSize: 80,
                marginRight: "10px",
                marginBottom: "10px",
              }}
            />
          }
          Budget Buddy
        </p>
      </Card.Header>
      <Card.Body
        style={{
          backgroundColor: "grey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Income getIncome={getIncome} />
        <FixedContainer getFixedExpenses={getFixedExpenses} />
        <SliderContainer getTotalSliderAmount={getTotalSliderAmount} />
        <RemainderContainer
          income={income}
          fixedExpenses={fixedExpenses}
          sliderExpenses={totalSliderAmount}
        />
      </Card.Body>
      <Card.Footer
        className="text-muted"
        style={{ backgroundColor: "#a3dff7" }}
      >
        <p className="react">
          <a href="https://react.dev/">
            {
              <FaReact
                style={{
                  color: "darkturquoise",
                  fontSize: 40,
                  marginRight: 10,
                }}
              />
            }
          </a>
          Built in React by JFA
        </p>

        <p className="bootstrap">
          {
            <a href="https://getbootstrap.com/">
              <FaBootstrap
                style={{
                  color: "#630cd7",
                  fontSize: 40,
                  marginRight: 10,
                }}
              />
            </a>
          }
          Styled with Bootstrap
        </p>
      </Card.Footer>
    </Card>
  );
}

export default AppContainer;
