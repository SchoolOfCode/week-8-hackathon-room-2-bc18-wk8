import CardContainer from "../CardComponent/Card.jsx";

function RemainderContainer({ income, fixedExpenses, sliderExpenses }) {
  let incomeInt = parseInt(income);
  let expensesInt = parseInt(fixedExpenses);
  const sliderExpensesArray = sliderExpenses.map((expense) =>
    parseInt(expense)
  ); // Ensure all are numbers

  function calculateRemainder(income, expenses, sliderPercentages) {
    let remainingFunds = income - expenses;

    // Apply each slider percentage sequentially
    sliderPercentages.forEach((percentage) => {
      let reduction = remainingFunds * (percentage / 100);
      remainingFunds -= reduction;
    });

    return remainingFunds;
  }

  return (
    <>
      <CardContainer
        content={
          <p>
            {calculateRemainder(incomeInt, expensesInt, sliderExpensesArray)}
          </p>
        }
      />
    </>
  );
}

export default RemainderContainer;
