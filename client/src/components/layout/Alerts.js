import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AlertContext from '../../context/alert/alertContext';

const Alerts = (props) => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i>
        {alert.msg}
      </div>
    ))
  );
};

Alerts.propTypes = {};

export default Alerts;
