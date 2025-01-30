import CardContainer from "../CardComponent/Card.jsx";

function RemainderContainer({ income, fixedExpenses }) {
  let incomeInt = parseInt(income);
  let expensesInt = parseInt(fixedExpenses);

  function calculateRemainder(income, expenses) {
    return income - expenses - 100;
  }

  return (
    <>
      <CardContainer
        content={<p>{calculateRemainder(incomeInt, expensesInt)}</p>}
      />
    </>
  );
}

export default RemainderContainer;
