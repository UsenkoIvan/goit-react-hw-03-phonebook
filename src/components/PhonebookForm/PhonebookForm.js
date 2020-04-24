import React, { Component } from 'react';
import styles from './PhonebookForm.module.css';
import PropTypes from 'prop-types';

const shortid = require('shortid');

const initialState = {
  name: '',
  number: '',
  id: '',
};

export default class Phonebook extends Component {
  state = {
    ...initialState,
  };

  static propTypes = {
    getNameInfo: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    if (name.length && number.length !== 0) {
      this.props.getNameInfo(this.state);
      this.setState(initialState);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ id: shortid.generate(), [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <h3>NAME</h3>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChangeInput}
          />
          <h3>NUMBER</h3>
          <input
            value={number}
            type="text"
            name="number"
            onChange={this.handleChangeInput}
          />
          <button type="submit" className={styles.btn}>
            Add to contacts
          </button>
        </form>
      </>
    );
  }
}
