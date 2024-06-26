import React from 'react';
import { Cta, Footer, Form, Hero } from '.';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <main>
        <div className='container row'>
          <div className='col-half'>
            <Hero />
          </div>
          <div className='col-half'>
            <Cta />
            <Form />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default App;
