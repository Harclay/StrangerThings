import ReactDom from 'react-dom';
import React, {createRoot} from "react";
import { App } from './components';


const rootElement = document.getElementById('root')
const root = ReactDom.createRoot(rootElement)

root.render(<App />);