import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Customer } from './models/Customer';
import { Modal } from './components/Modal';
import {addCustomer} from "./reducers/CustomerReducer.ts";

function App() {
    // Local state for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Access customer state from Redux store
    const customers = useSelector((state: any) => state.customerAdd);

    // Use dispatch to send actions
    const dispatch = useDispatch();

    // Handle form submission
    function handleSubmit() {
        if (name && email && phone) {
            const newCustomer: Customer = { name, email, phone };
            dispatch(addCustomer(newCustomer)); // Dispatch addCustomer action
            setName(''); // Reset form fields
            setEmail('');
            setPhone('');
        } else {
            alert('Please fill in all fields');
        }
    }

    return (
        <>
            <header>
                <h2>Add Customer</h2>
            </header>
            <br />
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>
                Add Customer
            </Modal>
            <br />
            {customers.map((customer: Customer) => (
                <div key={customer.email}>
                    {`${customer.name} ${customer.email} ${customer.phone}`}
                </div>
            ))}
        </>
    );
}

export default App;
