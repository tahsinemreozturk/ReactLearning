import React, { useState } from 'react';
import "./CustomerForm.css";

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = {
      id: Math.random(),
      customerName,
    };
    addNewCustomer(newCustomer);
    setCustomerName("");
  };

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="customer-input" 
        placeholder="Add a new customer"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        values = {customerName}
      />
      <button type="submit">
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;
