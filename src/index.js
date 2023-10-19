import React from 'react';
import './index.css';
import App from './components/app/App';
import { createRoot } from "react-dom/client";
import state from './redux/state';

const root = createRoot(document.getElementById("root"));

root.render(<App state={state}></App>);