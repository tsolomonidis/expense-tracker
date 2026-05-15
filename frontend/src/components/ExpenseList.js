import React from 'react';

function ExpenseList({ expenses }) {
    return (
        <div style={{ marginTop: '20px' }}>
            <h3>Η Λίστα μου</h3>
            {expenses.length === 0 ? <p>Δεν υπάρχουν έξοδα.</p> : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {expenses.map((expense) => (
                        <li key={expense.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
                            <strong>{expense.title}</strong>: {expense.amount}€
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ExpenseList;