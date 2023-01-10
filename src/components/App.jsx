import React, { Component } from 'react';

import Form from './ContactsBook/Form';
import ContactList from './ContactsBook/ContactList'
import Filter from './ContactsBook/Filter'

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = (data) => {
    const { contacts } = this.state
    if (!(contacts.filter(contact => contact.name.toLowerCase() === data.name.toLowerCase())).length) {
      this.setState(({ contacts }) => (
        {
        contacts: [data, ...contacts],
      }));
    } else alert(`${data.name} is already in contacts`)
  };

  deleteContact = (contactID) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  changeFilter = (evt) => {
      const {value} = evt.currentTarget
      this.setState(
        { filter: value, })
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }


  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts()
    
    return (
      <>
        <Form onSubmit={this.addContact} />
        <Filter value={ filter } changeFilter={ this.changeFilter } />
        <ContactList contacts={ visibleContacts } deleteContact={ this.deleteContact } />
      </>
    );
  }
}

export default App;
