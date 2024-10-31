import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import PrismRouter from './router';

function App() {
    useEffect(() => {
        document.title = 'PRISM'
    }, []);

    return (
        <Router>
            <PrismRouter />
        </Router>
    );
}

export default App;