import React, { Component } from 'react';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import ContactList from './ContactList/ContactList';
import FindContacts from './FindContacts/FindContacts';

export default class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    });
  }

  getNameInfo = name => {
    console.log('app', name);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, name],
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  FilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleFilterInput = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleDeleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  // delContactsLocal = param => {
  //   localStorage.setItem(
  //     'contacts',
  //     JSON.stringify(
  //       this.state.contacts.filter(contact => contact.id !== param),
  //     ),
  //   );
  // };

  render() {
    const { filter, contacts } = this.state;

    return (
      <>
        <h2>Phonebook</h2>
        <PhonebookForm getNameInfo={this.getNameInfo} />
        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <FindContacts filter={this.handleFilterInput} value={filter} />
        )}
        <ContactList
          contacts={this.FilterContacts()}
          onDelete={this.handleDeleteContacts}
        />
      </>
    );
  }
}
