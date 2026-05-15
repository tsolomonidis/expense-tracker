import React, { useState, useEffect } from 'react';
import api from '../services/api';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

function Dashboard() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            const res = await api.get('expenses/');
            setExpenses(res.data);
        } catch (err) {
            console.error("Error while downloading data");
        }
    };

    const handleAddExpense = async (data) => {
        try {
            await api.post('expenses/', data);
            fetchExpenses(); // List renwal after the addition
        } catch (err) {
            alert("Error while saving");
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
            <h2>Expense Tracker Dashboard</h2>
            <ExpenseForm onAdd={handleAddExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default Dashboard;