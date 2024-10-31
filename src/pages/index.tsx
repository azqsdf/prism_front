import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './index.css';

const Main: React.FC = () => {
    return (
        <div>
            <div className="title">
                <h1>안녕하세요 PRISM입니다</h1>
                <p>Location: 서울 용산구 이태원로 189 2층</p>
            </div>
            <div>
                <Link to="/display">
                    <Button size="lg" style={{ padding: '10px 20px', }}> 룰렛 (개발중) </Button>
                </Link>

                <Link to="/customers">
                    <Button size="lg" style={{ padding: ' 10px  20px' }}> 고객확인 page </Button>
                </Link>
            </div>
        </div>
    );
};

export default Main;
