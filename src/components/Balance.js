import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map((transaction)=>transaction.amount)
 
  const total = amounts.reduce((acc,item)=>{
    return acc+item;
  },0)
  
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total.toFixed(2)}</h1>
    </>
  )
}

export default Balance
