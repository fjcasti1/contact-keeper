import React, { Fragment, useContext, useState, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const initialState = {
  name: '',
  email: '',
  phone: '',
  type: 'personal',
};

const ContactForm = () => {
  const { addContact, updateContact, clearCurrent, current } = useContext(
    ContactContext,
  );

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact(initialState);
    }
  }, [current]);

  const [contact, setContact] = useState(initialState);

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        {/* <form> */}
        <h2 className='text-primary'>{current ? 'Edit Contact' : 'Add Contact'}</h2>
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
            value={current ? 'Edit Contact' : 'Add Contact'}
            className='btn btn-primary btn-block'
          />
        </div>
        {current && (
          <div>
            <button
              className='btn btn-DeviceLightEvent btn-block'
              onClick={clearAll}
            >
              Clear
            </button>
          </div>
        )}
      </form>
    </Fragment>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
