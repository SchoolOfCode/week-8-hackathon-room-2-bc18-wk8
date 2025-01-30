import Card from "react-bootstrap/Card";
import Income from "../Income/Income.jsx";
import FixedContainer from "../FixedContainer/FixedContainer.jsx";
import SliderContainer from "../SliderContainer/SliderContainer.jsx";
import RemainderContainer from "../RemainderContainer/RemainderContainer.jsx";
import { useState } from "react";
import BBLogo from "../../assets/BBLogo.png";

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
      <Card.Header style={{ backgroundColor: "white" }}>
        <img src={BBLogo} alt="Budget Buddy Logo" style={{ width: "200px" }} />
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
        Built in React by JFA
      </Card.Footer>
    </Card>
  );
}

export default AppContainer;
