import React, { useState } from 'react';


import './ExpenseForm.css'

const ExpenseForm =(props)=> {

const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''

})
// this is correct there a better way .we put a object in usestate and initialize it with that  all the properties.
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        // this is good but use this to be sure you always have the updated state.if it depends on previous state
        setEnteredTitle(event.target.value);
        //  setUserInput({...userInput, enteredTitle: event.target.value});
        // setUserInput((prevState)=> {
        //     return {...prevState, enteredTitle: event.target.value};
        // })
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({...userInput, enteredAmount: event.target.value});
    //     setUserInput((prevState)=> {
    //         return {...prevState, enteredAmount: event.target.value};
    // })
     } ;
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({...userInput, enteredDate: event.target.value});
        // setUserInput((prevState)=> {
        //     return {...prevState, enteredTitle: event.target.value};
        // })
    };
    const submitHandler = (event) => {
     event.preventDefault();

    // const removeSubmitHandler = (event) => {
    //  event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };
// this clears the user input after intered
     props.onSaveExpenseData(expenseData);
     setEnteredTitle('');
     setEnteredAmount('');
     setEnteredDate('');

    };

    return(
        <form onSubmit={submitHandler}>
       <div className='new-expense__controls'>
       <div className='new-expense__controls'>
       <label>Title</label>
       <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
      </div>
      <div className='new-expense__controls'>
       <label>Amount</label>
       <input type='number' value={enteredAmount} onChange={amountChangeHandler}  min='0.01' step="0.01" />
      </div>
      <div className='new-expense__controls'>
       <label>Date</label>
       <input type='date' value={enteredDate}  onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
      </div>
      </div>
      <div className='new-expense__actions'>
          <button type = "submit">Add Expense</button>
          </div>
      <div className='new-expense__actions2'>
          <button type = "submit">Remove Expense</button>
          </div>
        </form>

    );

}

export default ExpenseForm;