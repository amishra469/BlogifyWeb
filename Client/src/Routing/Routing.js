import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavBar from '../containers/TopNavbar/TopNavBar';
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
import Register from '../containers/Register/Register';
export default class Routing extends Component {
    render() {
        return (
            <Router>
                <TopNavBar />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/register" element={<Register />}></Route>
                </Routes>
            </Router>
        )
    }
}
