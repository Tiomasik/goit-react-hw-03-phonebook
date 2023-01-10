import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

import { StyleForm } from './Form.styled'


class Form extends Component {
  state = {
    name: '',
    number: ''
  }

  handlChange = (evt) => {
    const {name, value} = evt.currentTarget
    this.setState(
      {
        id: nanoid(),
        [name]: value,
      })
  }

  handlSubmit = (evt) => {
    evt.preventDefault()
    this.props.onSubmit(this.state)
    this.resetForm()
  }
    
  resetForm = () => {
    this.setState(
    { name: '', number: '' })
  }

  render() {
    const {name, number} = this.state

    return (
      <>
        <h2 style={{textAlign: 'center',
                    fontSize: 30,
                    fontWeight:700}}>Phonebook</h2>
        
        <StyleForm onSubmit={this.handlSubmit}>
          <label htmlFor='userName'>Name</label>
          <input
            id='userName'
            type="text"
            name="name"
            value={name}
            onChange={this.handlChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          
          <label htmlFor='userNumber'>Number</label>
          <input
            id='userNumber'
            type="tel"
            name="number"
            value={number}
            onChange={this.handlChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
          <button type='submit'>Add Contact</button>
        </StyleForm>
      </>    
    );
  }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Form;