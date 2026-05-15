import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav style={{ padding: '10px', backgroundColor: '#282c34', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Dashboard</Link>
            </div>
            <div>
                {!token ? (
                    <>
                        <Link to="/login" style={{ color: 'white', marginRight: '10px' }}>Login</Link>
                        <Link to="/register" style={{ color: 'white' }}>Register</Link>
                    </>
                ) : (
                    <button onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;