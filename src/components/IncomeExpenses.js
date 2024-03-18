import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);
  const incomes = transactions.map((transaction)=>{
    if(transaction.amount > 0){
      return transaction.amount
    }
    else{
      return 0;
    }
  })
  
  const totalIncome = incomes.reduce((p,c) => {
    return p+c;
  },0);

  const expenses = transactions.map((transaction)=>{
    if(transaction.amount < 0){
      return transaction.amount
    }
    else{
      return 0;
    }
  })
  
  const totalExpense = expenses.reduce((p,c) => {
    return p+c;
  },0)

  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p  className='money plus'>+${totalIncome.toFixed(2)}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p  className='money minus'>-${totalExpense.toFixed(2)}</p>
        </div>
      
    </div>
  )
}

export default IncomeExpenses
