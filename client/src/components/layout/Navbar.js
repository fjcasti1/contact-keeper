import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import authContext from '../../context/auth/authContext';
import contactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const { isAuthenticated, logout, user } = useContext(authContext);
  const { clearContacts } = useContext(contactContext);

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <ul>
      <li>Hello {user && user.name.split(' ')[0]}</li>
      <li>
        <Link to='/login' onClick={onLogout}>
          <i className='fas fa-sign-out-alt'></i> Logout
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      {isAuthenticated ? authLinks : guestLinks}
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'ContactKeeper',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
