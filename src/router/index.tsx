import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/";
import Login from "../pages/login";


const PrismRouter: React.FC = () => {

    return (
        <Routes>
            < Route path="/" element={<Main />} />
            < Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default PrismRouter;