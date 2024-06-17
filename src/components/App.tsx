import React from 'react';
import { Cta, Footer, Form, Hero } from '.';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <main>
        <Hero />
        <Cta />
        <Form />
      </main>
      <Footer />
    </>
  );
};
export default App;
