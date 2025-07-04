import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/JFResume/'>
      <App />
    </BrowserRouter>
  </StrictMode>
);
