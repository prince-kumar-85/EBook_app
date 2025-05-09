// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name || !email || !password) {
            setError("All fields are required");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/user/signup", {
                name,
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (res.status === 201) {
                setSuccess("User registered successfully");
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            } else {
                setError("Failed to register user");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Submission failed");
            console.error("Register Error:", err.response?.data || err.message);
        }
    };

    return (
        <div>
            <h1>Register Yourself</h1>
            <div className="form-container">
                <form className='form' onSubmit={handleSubmit}>
                    <label htmlFor='name'>Full Name</label>
                    <input type='text' id='name' placeholder='Enter your full name'
                        value={name} onChange={(e) => setName(e.target.value)} required />

                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Enter valid email'
                        value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder='Enter your password'
                        value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button type='submit' className='btn'>Register</button>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}

                    <p>By signing up, you agree to our <a href='/terms'>Terms of Service</a> and <a href='/privacy'>Privacy Policy</a>.</p>
                    <p>Already have an account? <a href='/login'>Login</a></p>
                </form>
            </div>
        </div>
    );
}

export default Register;
