import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import authContext from '../../context/auth/authContext';
import alertContext from '../../context/alert/alertContext';

const initialState = {
  email: '',
  password: '',
};

const Login = (props) => {
  const { login, isAuthenticated, error, clearErrors } = useContext(authContext);
  const { setAlert } = useContext(alertContext);

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [isAuthenticated, error]);

  const [user, setUser] = useState(initialState);

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '')
      setAlert('Please provide email & password', 'danger');
    else {
      login(user);
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <input type='submit' value='Login' className='btn btn-primary btn-block' />
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
