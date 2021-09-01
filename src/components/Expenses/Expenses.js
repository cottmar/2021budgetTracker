import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../NewExpense/ExpenseFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css'

 const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const addFilterByYear = (newYear) => {
    setFilteredYear(newYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

      return (
        <div>
          <Card className='expenses'>
                <ExpensesFilter 
                  selected={filteredYear} 
                  showYearHandler={addFilterByYear}
                />
                <ExpensesList items={filteredExpenses}/>
          </Card>
        </div>
      )
}

export default Expenses;
