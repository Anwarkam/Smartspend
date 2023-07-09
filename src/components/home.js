import React from 'react'
import "./home.css";
import TopFold from './topfold';
import ExpenseList from './expenseList';

const Home = () => {
  return (
    <div className='home'>
   <TopFold />
    <ExpenseList />

    </div>
  )
}

export default Home;