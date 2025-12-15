import { Form } from '.';

const Main = () => {
  return (
    <main>
      <div className='cta'>
        <span>Try it free 7 days</span> then $20/mo. thereafter
      </div>
      <div className='form__wrapper'>
        <Form />
        <p className='disclaimer'>
          By clicking the button, you are agreeing to our{' '}
          <a href='/'>Terms and Services</a>
        </p>
      </div>
    </main>
  );
};
export default Main;
