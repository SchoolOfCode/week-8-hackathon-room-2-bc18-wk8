function FixedExpense({ name, amount }) {
  return (
    <>
      <input value={name} placeholder="Input Expense Name" />
      <input value={amount} placeholder="Input Expense Cost" />
    </>
  );
}

export default FixedExpense;
