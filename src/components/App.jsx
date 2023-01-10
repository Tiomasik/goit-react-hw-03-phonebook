import React, { Component } from 'react';

import Form from './ContactsBook/Form';
import ContactList from './ContactsBook/ContactList'
import Filter from './ContactsBook/Filter'

class App extends Component {
  state = {
    contacts: [],
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

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
    
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
