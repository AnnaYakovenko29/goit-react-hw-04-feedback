import './Notification.css'
import PropTypes from 'prop-types'

export const Notification = ({ message }) => {
    return <p className='titleNotification'>{message}</p>;
  };

  Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };