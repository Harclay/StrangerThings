import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './components';


const rootElement = document.getElementById('root')
const root = ReactDom.createRoot(rootElement)

root.render(<App />);