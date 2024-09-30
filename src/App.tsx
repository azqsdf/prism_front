import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrismRouter from './router';
import './App.css';

function App() {
    return (
        <Router>
            <PrismRouter />
        </Router>
    );
}

export default App;