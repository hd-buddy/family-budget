import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';  // We will create this context

const NavBar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 50px', backgroundColor: '#f0f0f0' }}>
            <Link to="/">
                <h1>Family Budget Tracker</h1>
            </Link>
            <div>
                {isAuthenticated ? (
                    <>
                        <Link to="/dashboard"><button>Dashboard</button></Link>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/register"><button>Register</button></Link>
                        <Link to="/login"><button>Login</button></Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
