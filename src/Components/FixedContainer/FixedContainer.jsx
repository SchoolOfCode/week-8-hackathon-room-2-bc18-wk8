import CardContainer from "../CardComponent/Card.jsx";
import FixedExpense from "./FixedExpense/FixedExpense.jsx";

function FixedContainer() {
  return <CardContainer content={<FixedExpense />} />;
}

export default FixedContainer;
