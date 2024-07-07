import { useState } from 'react';
import './App.css';
import CustomerForm from './components/CustomerForm/CustomerForm';
import CustomerList from './components/CustomerList/CustomerList';

function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    //setCustomers([...customers, newCustomer]);
    setCustomers((prevState) =>[newCustomer,...prevState])
  };

  return (
    <div className="App">
      <h1>Customer Manager System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      <CustomerList customers={customers} setCustomers={setCustomers} />
    </div>
  );
}

export default App;
