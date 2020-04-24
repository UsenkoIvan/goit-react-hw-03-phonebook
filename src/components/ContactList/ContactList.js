import React from "react";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};

export default Contacts;
