import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import './display.css';


const temp_data = [
    {
        option: "TEST1",
        style: { backgroundColor: 'gray', textColor: 'white' },
        percentage: 1
    },
    {
        option: "TEST2",
        style: { backgroundColor: 'black', textColor: 'white' },
        percentage: 1
    },
    {
        option: "TEST3",
        style: { backgroundColor: 'blue', textColor: 'white' },
        percentage: 1
    },
    {
        option: "TEST4",
        style: { backgroundColor: 'red', textColor: 'white' },
        percentage: 1
    },
    {
        option: "TEST5",
        style: { backgroundColor: 'orange', textColor: 'white' },
        percentage: 96
    }
]


const Display: React.FC = () => {

    //�귿�� ȸ�� �ִϸ��̼��� ����
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);//��÷ �ε���

    const handleSpinClick = () => {
        if (!mustSpin) {
            const pivot = Math.floor((Math.random() * 100) + 1); // 1~100
            let stack = 0;
            let newPrizeNumber = -1; // �ʱⰪ ����

            // percentage �迭�� ����Ͽ� ��÷ �ε��� ����
            temp_data.forEach((row, idx) => {
                stack += row.percentage;
                if (pivot <= stack && newPrizeNumber === -1) {
                    newPrizeNumber = idx;
                }
            });

            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    };

    const stopSpinning = () => {
        setMustSpin(false);
        alert(temp_data[prizeNumber].option + '!!');
    };

    return (
        <>
            <div className="roulette">
                <h1 style={{backgroundColor: 'tomato', fontSize: '4rem', lineHeight: '1.5'}}>  PRISM  </h1>
                <Wheel
                    startingOptionIndex={Math.floor(Math.random() * temp_data.length)}
                    mustStartSpinning={mustSpin}
                    onStopSpinning={stopSpinning}
                    prizeNumber={prizeNumber}
                    data={temp_data}
                    backgroundColors={['#3e3e3e', '#df3428']}
                    textColors={['#ffffff']}
                ></Wheel>

                <button onClick={handleSpinClick}>SPIN</button>
            </div>
        </>
    );
};

export default Display;