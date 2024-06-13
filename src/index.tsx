import ReactDOM from 'react-dom/client';
import './scss/style.scss';
import { App } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
