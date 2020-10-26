import React, { Fragment, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';
import { motion } from 'framer-motion';

const Contacts = () => {
  const { contacts, filtered, getContacts, loading } = useContext(ContactContext);

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && !loading && contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  let showContacts;
  if (filtered !== null) {
    showContacts = filtered;
  } else {
    showContacts = contacts;
  }

  return contacts !== null && !loading ? (
    <Fragment>
      {showContacts.map((contact) => (
        <motion.div
          key={contact._id}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ContactItem contact={contact} />
        </motion.div>
      ))}
    </Fragment>
  ) : (
    <Spinner />
  );
};

export default Contacts;
