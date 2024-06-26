import React from 'react';

type FormProps = {};

const Form: React.FC<FormProps> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__item'>
        <label htmlFor='fname' className='visually-hidden'>
          First Name
        </label>
        <input
          type='text'
          id='fname'
          name='fname'
          placeholder='First Name'
          required
        />
      </div>

      <div className='form__item'>
        <label htmlFor='lname' className='visually-hidden'>
          Last Name
        </label>
        <input
          type='text'
          id='lname'
          name='lname'
          placeholder='Last Name'
          required
        />
      </div>

      <div className='form__item'>
        <label htmlFor='email' className='visually-hidden'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          required
        />
      </div>

      <div className='form__item'>
        <label htmlFor='password' className='visually-hidden'>
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          required
        />
      </div>

      <button className='btn btn--submit'>Claim your free trial</button>

      <p className='disclaimer'>
        By clicking the button, you are agreeing to our{' '}
        <a href='/'>Terms and Services</a>
      </p>
    </form>
  );
};
export default Form;
