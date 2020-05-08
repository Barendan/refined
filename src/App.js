import React from 'react';
import logo from './logo.svg';
import './App.css';

import ContactList from './components/contacts';
import AddContactForm from './components/addcontactform';


function App() {
  return (
    <div className="App">
      <h1> Refined </h1>
      <ContactList />
      <AddContactForm />
    </div>
  );
}

export default App;
