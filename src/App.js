import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App =() => {
  const expenses = [
    {
      id: '1',
      date: new Date(),
      title: 'Insurance',
      price: 100,
      location: 'Bangalore',
    },
    {
      id: '2',
      date: new Date(),
      title: 'Book',
      price: 10,
      location: 'Delhi',
    },
    {
      id: '3',
      date: new Date(),
      title: 'Pen',
      price: 1,
      location: 'Hyderabad',
    },
    {
      id: '4',
      date: new Date(),
      title: 'Laptop',
      price: 200,
      location: 'Mumbai',
    },
  ];
  const addExpenseHandler = (newExpenseData) => {
    console.log(newExpenseData);
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
