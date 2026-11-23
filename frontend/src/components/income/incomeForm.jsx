import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext.jsx';
import Button from '../button/Button.jsx';
import { plus } from '../../utils/Icons.jsx';

function Form() {
  const { addIncome, error, setError } = useGlobalContext();
  const [success, setSuccess] = useState('');
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = name => e => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    addIncome(inputState);

    // Show success message
    setSuccess('Expense added successfully!');

    // Clear form
    setInputState({
      title: '',
      amount: '',
      date: '',
      category: '',
      description: '',
    });

    // Hide success after 3 sec
    setTimeout(() => {
      setSuccess('');
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto" style={{ width: '370px' }} >
      
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setError('')}
          ></button>
        </div>
      )}

      {success && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {success}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setSuccess('')}
          ></button>
        </div>
      )}

      <div className="mb-3">
        <input
          type="text"
          className="form-control shadow-sm"
          style={{ height: '40px' }}
          value={title}
          name="title"
          placeholder="Expense Title"
          onChange={handleInput('title')}
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          min="0"
          style={{ height: '40px' }}
          className="form-control shadow-sm"
          value={amount}
          name="amount"
          placeholder="Expense Amount"
          onChange={handleInput('amount')}
        />
      </div>

      <div className="mb-3">
        <DatePicker
          className="form-control shadow-sm"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setInputState({ ...inputState, date: date })}
        />
      </div>

      <div className="mb-3">
        <select
          className="form-select shadow-sm"
          style={{ height: '40px' }}
          value={category}
          name="category"
          onChange={handleInput('category')}
          required
        >
          <option value="" disabled>Select Option</option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">YouTube</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-3">
        <textarea
          className="form-control shadow-sm"
          name="description"
          placeholder="Add A Reference"
          value={description}
          onChange={handleInput('description')}
          style={{ resize: 'none' }}
          maxLength={20}
          rows="1"
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn d-flex align-items-center gap-2 shadow-sm rounded-pill"
        style={{ backgroundColor: '#ff5c8d', color: '#fff' }}
      >
        <i className="fa-solid fa-plus"></i>
        Add Income
      </button>
</form>

  );
}

export default Form;
