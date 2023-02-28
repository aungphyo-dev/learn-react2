import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import {StateContextProvider} from "./context/StateContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
  </React.StrictMode>,
)
