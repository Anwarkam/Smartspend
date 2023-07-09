import React from 'react';
import "./expense-list.css";
import Card from './card';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const ExpenseList = () => {

const {expenseList:list, query }  = useSelector((state) => state.expenses);
const filteredList = list.filter(item =>item.title.includes(query))
const notifySucess =() => toast.success("Expense Deleted");


return (
<div className='expense-list'>
<ToastContainer
position="bottom-left"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
/>
{ filteredList.length ? (
filteredList.map((item) => (
    <Card item={item} notifySucess={notifySucess} />
    ))

) : (
    <div className='empty-state'>
    <img src={require('../assets/opps.jpg').default}
    alt='Empty_List'
     className='empty-image' 
        
     />
    <label>Uh Oh! Your Expense List is Empty</label>
</div>

)}
   </div>
    
  
)}

export default ExpenseList;