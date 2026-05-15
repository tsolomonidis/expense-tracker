import React, { useState } from 'react';

function ExpenseForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount) return alert("Fill all the blanks");
        onAdd({ title, amount });
        setTitle('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
            <input type="text" placeholder="Exit Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button type="submit">Προσθήκη</button>
        </form>
    );
}

export default ExpenseForm;