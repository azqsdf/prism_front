import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/";
import Login from "../pages/login";
import Display from "../pages/lucky_draw/display";
import Collect from "../pages/lucky_draw/collect";
import Customers from "../pages/customers/main";


function PrismRouter() {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/display" element={<Display />} />
            <Route path="/collect" element={<Collect />} />
            <Route path="/customers" element={<Customers />} />

        </Routes>
    );
}

export default PrismRouter;