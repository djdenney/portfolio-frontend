import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from "./reportWebVitals"
import './custom.scss';


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)

reportWebVitals()
