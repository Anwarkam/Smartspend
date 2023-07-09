import React, { useState } from 'react';
import "./topfold.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../redux/actions/expenses';


const TopFold = () => {
    const [query, setQuery] = useState("");
    const dispatch= useDispatch();
    const handelQuery=(e) => {
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value));


    }
  return(

 <div className='topFold'>
      {window.location.pathname ==='/'?<div className='home-topfold'>
     <div className='search-bar'>
     <i class="fi fi-rr-search"></i>
            <input 
              value= {query}
            placeholder='Search'  onChange={(e)=>handelQuery(e)} 

            />
            </div>
            <Link to="/add-expense">
            <div className='add-button'>
            <i class="fi fi-br-plus"></i>
            <label>Add</label>
             </div>
            </Link>
           
        </div> :(
            <div className='add-topfold'>
            <Link to="/">
            <div className='add-topfold-button'>
                <i class="fi fi-bs-angle-left"></i>
                <label>Back</label>
                </div>
            </Link>
               
                <div className='add-topfold'>
                <Link to="/">
                <div className='add-topfold-button'>
                <i class="fi fi-rr-cross-circle"></i>
                <label>cancel</label>
                </div></Link>
                
        </div> 
        </div>
        )}
        
    </div>
    );
};

export default TopFold;