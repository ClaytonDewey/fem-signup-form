import React from 'react';
import Footer from './Footer';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <main>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
        <p>Try it free 7 days then $20/mo. thereafter</p>
        First Name
        <br />
        Last Name
        <br />
        Email Address
        <br />
        Password
        <br />
        <p>Claim your free trial</p>
        <p>
          By clicking the button, you are agreeing to our Terms and Services
        </p>
      </main>
      <Footer />
    </>
  );
};
export default App;
