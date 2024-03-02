import React from 'react';
import { Link } from "react-router-dom";

const TopNavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <span class="navbar-brand" href="#">BlogyFy</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">
                                    HOME
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">
                                    Write your Post
                                </Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div className="nav-item">
                                <Link class="nav-link active" to="/login">
                                    LOGIN
                                </Link>
                            </div >
                            <div className="nav-item">
                                <Link class="nav-link active" to="/register">
                                    REGISTER
                                </Link>
                            </div >
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default TopNavBar
