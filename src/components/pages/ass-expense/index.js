import React from 'react';
import TopFold from '../../topfold';
import "./add-expense.css";
import AddForm from '../../add-foam';

const AddExpense = () => {
  return (
    <div className='add-expense'>
        <TopFold />
        <AddForm />
    </div>
  )
}

export default AddExpense;