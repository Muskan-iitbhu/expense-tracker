import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext.jsx';
import IncomeItem from '../incomeItem/IncomeItem.jsx';
import ExpenseForm from './expenseForm';

function Expenses() {
    const { expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext()

    useEffect(() => {
        getExpenses()
    }, [])

    return (
         <div className="d-flex flex-column overflow-auto p-3">
      <h1>Expenses</h1>
      <h2
  className="d-flex justify-content-center align-items-center border border-white shadow-sm rounded p-2 my-3 fs-2 gap-2"
  style={{
    background: '#FCF6F9' // light pink shade 
  }}
>
        Total Expense: <span className="fs-1 fw-bold text-success">₹{totalExpenses()}</span>
      </h2>

      <div className="d-flex gap-4">
        <div className="flex-shrink-0" style={{ minWidth: '300px' }}>
          <ExpenseForm  />
        </div>
        <div className="flex-grow-1">
          {expenses.map((expense) => {
            const { _id, title, amount, date, category, description, type } = expense;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="var(--color-green)"
                deleteItem={deleteExpense}
              />
            );
          })}
        </div>
      </div>
    </div>
    )
}

export default Expenses
