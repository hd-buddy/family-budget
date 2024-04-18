import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [familyName, setFamilyName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // You should validate and handle the registration with your backend here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Family</h2>
            <input type="text" value={familyName} onChange={e => setFamilyName(e.target.value)} placeholder="Family Name" required />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
