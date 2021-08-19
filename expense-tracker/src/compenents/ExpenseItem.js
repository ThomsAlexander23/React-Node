import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 6, 10);
  const expenseTitle = "Delta Airlines";
  const expenseCost = 3135.7;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseCost}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
