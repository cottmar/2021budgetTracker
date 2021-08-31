import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../NewExpense/ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css'

 const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const addFilterByYear = (newYear) => {
    console.log('INSIDE ADDFILTER BY YEAR')
    setFilteredYear(newYear);
    console.log(`Expenses showing ${newYear}`);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

      return (
        <div>
          <Card>
              <ExpensesFilter selected={filteredYear} showYearHandler={addFilterByYear}/>
              {filteredExpenses.map(expense => 
                <ExpenseItem 
                  key={expense.id} 
                  title={expense.title} 
                  amount={expense.amount} 
                  date={expense.date}/>)}
          </Card>
        </div>
      )
}

export default Expenses;
