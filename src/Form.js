import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSignin from './FormSignin';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
          <img className='form-img-5' src='img/img-5.svg' alt='mm' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
       
        )}
      </div>
    </>
  );
};

export default Form;
