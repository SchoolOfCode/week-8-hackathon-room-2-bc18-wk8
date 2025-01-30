import Card from "react-bootstrap/Card";
import Income from "../Income/Income.jsx";
import FixedContainer from "../FixedContainer/FixedContainer.jsx";
import SliderContainer from "../SliderContainer/SliderContainer.jsx";
import RemainderContainer from "../RemainderContainer/RemainderContainer.jsx";

function AppContainer() {
  return (
    <Card className="text-center vh-100 vw-100">
      <Card.Header>Budget Buddy</Card.Header>
      <Card.Body>
        <Income />
        <FixedContainer />
        <SliderContainer />
        <RemainderContainer />
      </Card.Body>
      <Card.Footer className="text-muted">Built in react by JFA</Card.Footer>
    </Card>
  );
}

export default AppContainer;
