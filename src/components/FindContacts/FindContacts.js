import React from "react";
import styles from "./FindContacts.module.css";
import PropTypes from "prop-types";

const FindContacts = ({ filter, value }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          className={styles.input}
          value={value}
          type="search"
          name="Find contacts"
          onChange={filter}
        />
      </label>
    </>
  );
};

FindContacts.propTypes = {
  filter: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default FindContacts;
