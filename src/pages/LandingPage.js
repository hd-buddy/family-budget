import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Welcome to Family Budget Tracker</h1>
            <p>Track and analyze your family's expenses and income efficiently in one place.</p>
            <div>
                <Link to="/register">
                    <button style={{ marginRight: '10px', padding: '10px' }}>Register Family</button>
                </Link>
                <Link to="/login">
                    <button style={{ padding: '10px' }}>Join Family</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
