import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Button, Input } from '.';
import { Icon } from '../svg';

const Form = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const formInputs = [
    { id: 'fname', name: 'fname', type: 'text', placeholder: 'First Name' },
    { id: 'lname', name: 'lname', type: 'text', placeholder: 'Last Name' },
    { id: 'email', name: 'email', type: 'email', placeholder: 'Email Address' },
    {
      id: 'password',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateInput = () => {
    const newErrors: { [key: string]: string } = {};
    if (formData.fname.trim() === '') {
      newErrors.fname = 'First Name cannot be empty';
    }
    if (formData.lname.trim() === '') {
      newErrors.lname = 'Last Name cannot be empty';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Looks like this is not an email';
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password cannot be empty';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInput()) {
      setFormData({
        fname: '',
        lname: '',
        email: '',
        password: '',
      });
      setErrors({});
      toast.success('Form submitted successfully!');
      // Further submission logic can be added here
    } else {
      toast.error('Please fix the errors in the form.');
      console.error('Form has errors:', errors);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <fieldset>
        <legend className='sr-only'>Signup Form</legend>
        {formInputs.map((input) => (
          <div
            key={input.id}
            className={`form__item ${
              errors[input.name] ? 'is-invalid-input' : ''
            }`}>
            <label htmlFor={input.id} className='sr-only'>
              {input.placeholder}
            </label>
            <Input
              type={input.type}
              id={input.id}
              name={input.name}
              value={formData[input.name as keyof typeof formData]}
              placeholder={input.placeholder}
              onChange={handleChange}
            />
            {errors[input.name] && (
              <>
                <div className='form__error-icon'>
                  <Icon name='error' />
                </div>
                <p className='form__error'>{errors[input.name]}</p>
              </>
            )}
          </div>
        ))}
      </fieldset>

      <Button type='submit' className='btn btn-submit'>
        Claim your free trial
      </Button>
      <Toaster
        containerStyle={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </form>
  );
};
export default Form;
