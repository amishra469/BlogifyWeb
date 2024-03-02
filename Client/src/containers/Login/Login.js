import React, { useState } from 'react';
import './Login.css';
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let payload = {
                username: username,
                password: password,
            }
            const res = await axios.post("/auth/login", payload);
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    };


    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your username..."
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter your password..."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="loginButton" type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
