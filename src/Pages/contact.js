import React, { useState } from 'react';
import './form.css';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    }

    return (
        <form onSubmit={handleSubmit}>
        <h1>Contact Me!</h1>
        <div>
            <label className="label" htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label className="label" htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label className="label" htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
    </form>
    );
}