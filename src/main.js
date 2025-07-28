import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import './index.css';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(BrowserRouter, { basename: '/JFResume/', children: _jsx(App, {}) }) }));
