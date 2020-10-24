import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const initialState = {
  name: '',
  email: '',
  phone: '',
  type: 'personal',
};

const ContactForm = (props) => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState(initialState);

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    contactContext.addContact(contact);
    setContact(initialState);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        {/* <form> */}
        <h2 className='text-primary'>Add Contact</h2>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={onChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
        <input
          type='text'
          name='phone'
          placeholder='Phone Number'
          value={phone}
          onChange={onChange}
        />
        <h5>Contact Type</h5>
        <input
          type='radio'
          name='type'
          value='personal'
          checked={type === 'personal'}
          onChange={onChange}
        />{' '}
        Personal{' '}
        <input
          type='radio'
          name='type'
          value='professional'
          checked={type === 'professional'}
          onChange={onChange}
        />
        {'  '}
        Professional
        <div>
          <input
            type='submit'
            value='Add Contact'
            className='btn btn-primary btn-block'
          />
        </div>
      </form>
    </Fragment>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
