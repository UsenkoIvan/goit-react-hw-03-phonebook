import React from "react";
import styles from "./ContactItem.module.css";

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <>
      <li className={styles.list}>
        <p>
          {name}:<span>{number}</span>
        </p>
        <button onClick={onDelete} className={styles.btn}>
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactItem;
