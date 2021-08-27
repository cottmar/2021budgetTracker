import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../NewExpense/ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css'

 const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const addFilterByYear = (newYear) => {
    setFilteredYear(newYear);
    console.log(`Expenses showing ${newYear}`);
  }


      return (
        <div>
          <Card>
              <ExpensesFilter selected={filteredYear} showYearHandler={addFilterByYear}/>
              {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
          </Card>
        </div>
      )
}

export default Expenses;
