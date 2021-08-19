// import "./App.css";
import Expenses from "./components/Expenses";

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
    <div>
      <h2>Let's Get Started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
