import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
    return (
        <div>
            <h1>Thi is Main Page</h1>
            <Link to="/display">
                <button> Display page </button>
            </Link>

            <Link to="/collect">
                <button> Collect page </button>
            </Link>
        </div>
    );
};

export default Main;
