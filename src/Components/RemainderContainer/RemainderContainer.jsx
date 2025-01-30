import CardContainer from "../CardComponent/Card.jsx";

function RemainderContainer({ income, fixedExpenses, sliderExpenses }) {
  let incomeInt = parseInt(income);
  let expensesInt = parseInt(fixedExpenses);
  const sliderExpensesInt = parseInt(sliderExpenses);

  function calculateRemainder(income, expenses, sliderExpenses) {
    return income - expenses - sliderExpenses;
  }

  return (
    <>
      <CardContainer
        content={
          <p>{calculateRemainder(incomeInt, expensesInt, sliderExpensesInt)}</p>
        }
      />
    </>
  );
}

export default RemainderContainer;
