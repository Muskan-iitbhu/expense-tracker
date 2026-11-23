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
    setSuccess('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Call your addIncome
    addIncome(inputState);

    // Show success message
    setSuccess('Income added successfully!');

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
    <form onSubmit={handleSubmit}  style={{ width: '370px' }} >
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
          style={{ height: '40px' }}
          className="form-control shadow-sm"
          value={title}
          name="title"
          placeholder="Salary Title"
          onChange={handleInput('title')}
        />
      </div>
      <div className="mb-3">
        <input
          value={amount}
          type="text"
          style={{ height: '40px' }}
          className="form-control shadow-sm"
          name="amount"
          placeholder="Salary Amount"
          onChange={handleInput('amount')}
        />
      </div>
      <div className="mb-3">
        <DatePicker
          id="date"
          style={{ height: '40px' }}
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setInputState({ ...inputState, date: date })}
          className="form-control shadow-sm"
        />
      </div>
      <div className="mb-3">
        <select
          required
          value={category}
          style={{ height: '40px' }}
          name="category"
          id="category"
          onChange={handleInput('category')}
          className="form-select shadow-sm"
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
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          className="form-control shadow-sm"
          onChange={handleInput('description')}
          style={{ resize: 'none' }}
          maxLength={20}
          rows="1"
        ></textarea>
      </div>
      <div>
        <Button
          name={'Add Income'}
          icon={plus}
          bPad={'.8rem 1.6rem'}
          bRad={'30px'}
          bg={'var(--color-accent'}
          color={'#fff'}
        />
      </div>
    </form>
  );
}

export default Form;
