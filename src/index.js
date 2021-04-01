import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './routes/index';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Root/>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
