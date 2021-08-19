// import "./App.css";
import ExpenseItem from "./compenents/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Delta Airlines",
      amount: 1312.23,
      date: new Date(2021, 6, 13),
    },
    { id: "2", title: "NYSEG", amount: 55.34, date: new Date(2021, 6, 10) },
    {
      id: "3",
      title: "Grizz Lacrosse",
      amount: 540.0,
      date: new Date(2021, 6, 25),
    },
    {
      id: "4",
      title: "Glacier National Park",
      amount: 50.0,
      date: new Date(2021, 6, 20),
    },
    {
      id: "5",
      title: "Sprinter Loan",
      amount: 298.88,
      date: new Date(2021, 6, 16),
    },
    { id: "6", title: "Mortgage", amount: 789.99, date: new Date(2021, 6, 14) },
    {
      id: "7",
      title: "Heating Oil",
      amount: 273.91,
      date: new Date(2021, 6, 8),
    },
  ];

  return (
    <div className="App">
      <h2>Let's Get Started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[5].title}
        amount={expenses[5].amount}
        date={expenses[5].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
