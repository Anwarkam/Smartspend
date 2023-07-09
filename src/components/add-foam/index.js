import React, { useState } from 'react';
import "./addfoam.css";
import { categories } from '../../constant/add-expense';
import { useDispatch } from 'react-redux';
import AddExpense from '../pages/ass-expense';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import SuccesModal from './sucess-modal';


const AddForm = () => {
     const cat = categories;
     const [categoryOpen, setCategoryOpen ] = useState(false)
    const [title, setTitle] = useState("");
    const [ amount, setAmount] = useState("");
    const [category, setCategory] = useState();
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen]= useState(false);


    const handelTitle= (e) =>{
        setTitle(e.target.value);

    }

    const handelAmount= (e) =>{
        const val =parseFloat(e.target.value)
        if(isNaN(val)){
            setAmount("")
            return
        }
        setAmount(val);
    }
    const handelcategory=(category)=>{
        setCategory(category)
        setCategoryOpen(false);

    }

    const handelSubmit =() =>{
        if(title ===""||amount ===""||!category){
            const notify = () => toast("Please enter valid data!");
            notify();
            return;
         }

        const data={
            title,
            amount,
            category,
            createAt:new Date()
        };
        dispatch(AddExpense(data));
        setModalOpen(true);


    }
  return (
    <div className='add-form'>
    <ToastContainer
position="bottom-left"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
/>
<SuccesModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    <div className='form-item'>
        <label>Title</label>
        <input placeholder='Expenditure' value={title} 
        onChange={(e) => handelTitle(e)}

        />
    </div>
        <div className='form-item'>
            <label>Amount ₹</label>
            <input value={amount}
             placeholder='Enter Amount' className='amount-input'
             onChange={(e)=> handelAmount(e)}
              />
        </div>
        <div className='category-container-parent'>
            <div className='category'>
             <div className='category-dropdown'
               onClick={() => setCategoryOpen(!categoryOpen)}
               >
                <label>{category ? category.title : 'Category'}</label>
                <i class="fi fi-rr-angle-small-down"></i>

             </div>
             {categoryOpen && (
                <div className='category-container'>
             {cat.map((category) => (
                <div
                 className='category-item'
                  style={{
                    borderRight:`5px solid ${category.color}`,
                }}
                key={category.id}
                 onClick={()=> handelcategory(category)}
                 >
                 
                    <label>{category.title}</label>
                    <img src={category.icon} alt={category.title}/>
                   
                 </div>
             ))} 
             </div>
             )}
             </div>
        </div>
    <div className='form-add-button'>
        <div onClick={handelSubmit}>
            <label>Add</label>
            <i class="fi fi-rr-paper-plane"></i>
        </div>
    </div>
    </div>
  );
};

export default AddForm;