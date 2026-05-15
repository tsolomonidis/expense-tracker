import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sending POST request to Django registration endpoint
            await api.post('register/', formData);
            alert("Registration successful! Please login.");
            navigate('/login');
        } catch (err) {
            console.error("Registration error:", err);
            alert("Registration failed. Username might already exist.");
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        style={{ width: '100%', padding: '8px' }}
                        onChange={e => setFormData({...formData, username: e.target.value})} 
                        required 
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        style={{ width: '100%', padding: '8px' }}
                        onChange={e => setFormData({...formData, email: e.target.value})} 
                        required 
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        style={{ width: '100%', padding: '8px' }}
                        onChange={e => setFormData({...formData, password: e.target.value})} 
                        required 
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none' }}>
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;