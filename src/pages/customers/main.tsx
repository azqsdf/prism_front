/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './main.css';
import customerData from '../../sample/customer_info.json'



const Customers: React.FC = () => {
    const [customer, setCustomer] = useState({
        lastName: "",
        firstName: "",
        age: 0,
        level: "",
        birthday: "",
        date: "",
        expired: ""
    });
    const [barcode, setBarcode] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);


    // 현재 날짜와 시간 포맷팅
    const getCurrentDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const date = `${year}-${month}-${day}`; // YYYY-MM-DD 형식
        const time = `${hours}:${minutes}:${seconds}`; // HH:MM:SS 형식

        return `${date}\t\t[${time}]`; // 최종적으로 날짜와 시간 결합
    };

    const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());

    const handleButtonClick = () => {
        for (let i = 0; i < customerData['customer_info'].length; i++) {
            if (barcode === customerData['customer_info'][i]['barcode']) {
                setCustomer({
                    lastName: customerData['customer_info'][i]['last_name'],
                    firstName: customerData['customer_info'][i]['first_name'],
                    age: customerData['customer_info'][i]['age'],
                    level: customerData['customer_info'][i]['level'],
                    birthday: customerData['customer_info'][i]['DOB'],
                    date: customerData['customer_info'][i]['date'],
                    expired: customerData['customer_info'][i]['expired_date']
                })
                return;
            }
            else {
                setCustomer({
                    lastName: 'ERROR',
                    firstName: 'ERROR',
                    age: 99,
                    level: 'ERROR',
                    birthday: 'ERROR',
                    date: 'ERROR',
                    expired: 'ERROR'
                })
            }
        }
    };

    // 키보드 이벤트 리스너 추가
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Enter' && document.activeElement === inputRef.current) {
                handleButtonClick();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [barcode]); // 빈 배열을 의존성으로 주어 컴포넌트가 마운트될 때만 실행


    // 실시간으로 시간을 업데이트하는 useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(getCurrentDateTime());
        }, 1000); // 1초마다 업데이트

        // 컴포넌트 언마운트 시 interval 제거
        return () => clearInterval(intervalId);
    }, []);

    // 만료일이 오늘보다 지났는지 확인하는 함수
    const isExpired = (expiredDate: string) => {
        const today = new Date();
        const expired = new Date(expiredDate);
        return expired < today; // 만료일이 오늘보다 이전이면 true
    };


    return (
        <div>
            <h1>이곳은 고객을 확인하는 곳 입니다.</h1>
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default" style={{
                        fontSize: '30px',
                        backgroundColor: 'orange',
                        margin: 30
                    }}>
                        Barcode
                    </InputGroup.Text>
                    <Form.Control
                        ref={inputRef}
                        placeholder="barcode"
                        aria-label="barcode"
                        aria-describedby="basic-addon2"
                        style={{
                            marginLeft: 10,
                            marginBottom: 20,
                            fontSize: "20px"
                        }}
                        value={barcode}
                        onChange={(e) => {
                            setBarcode(e.target.value);
                        }} // 입력 값 변경시 상태 업데이트

                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={handleButtonClick} style={{fontSize: '20px'}}>
                        Enter
                    </Button>
                    <span style={{
                        fontSize: '20px',
                        marginLeft: '20px',
                        alignSelf: 'center'
                    }}>
                        {currentDateTime} {/* 현재 날짜와 시간 표시 */}
                    </span>
                </InputGroup>
            </div>
            <table style={{
                margin: 40,
                width: "50%",
                textAlign: "center",
            }}>
                <thead>
                    <tr style={{
                        backgroundColor: "rgb(62,180,137)", // Mint Color
                    }}>
                        <th style={{ padding: '15px' }}>성 (Last Name)</th>
                        <th style={{ padding: '15px' }}>이름 (First Name)</th>
                        <th style={{ padding: '15px' }}>나이 (만)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '15px' }}>{customer.lastName}</td>
                        <td style={{ padding: '15px' }}>{customer.firstName}</td>
                        <td style={{ padding: '15px' }}>{customer.age}</td>
                    </tr>
                </tbody>
            </table>

            <table style={{
                margin: 40,
                width: "50%",
                textAlign: "center",
            } }>
                <thead style={{
                    backgroundColor: "rgb(62,180,137)", // Mint Color
                }}>
                    <tr>
                        <th style={{ padding: '15px' }}> 등급 (Level)</th>
                        <th style={{ padding: '15px' }}> 생년월일 (DOB)</th>
                    </tr>
                </thead>
                <tbody>
                    <td style={{ padding: '15px', backgroundColor: "yellow" }}>{customer.level}</td>
                    <td style={{ padding: '15px' }}>{customer.birthday}</td>
                </tbody>

            </table>

            <table style={{
                margin: 40,
                width: "50%",
                textAlign: "center",
            }}>
                <thead style={{
                    backgroundColor: "rgb(62,180,137)", // Mint Color
                }}>
                    <tr>
                        <th style={{ padding: '15px' }}> 만료일 (Expired Date)</th>
                        <th style={{ padding: '15px' }}> 생성일자 (Started Date)</th>
                    </tr>
                </thead>
                <tbody>
                    <td style={{
                        padding: '15px',
                        backgroundColor: isExpired(customer.expired) ? "red" : "yellow" // 만료일이 지났으면 빨간색
                    }}>
                        {customer.expired}
                    </td>
                    <td style={{ padding: '15px' }}>{customer.date}</td>
                </tbody>

            </table>

            {/*
            <div>
                <Link to="./barcode-scan">
                    <Button size="lg" style={{ padding: '10px 20px', }}> Barcode Scan page </Button>
                </Link>
            </div>
            */}
        </div>
    );
}

export default Customers;