import PropTypes from 'prop-types';
import './Section.css';

export const Section = ({ title, children }) => {
  return (
    <div className='section'>
      {title && <p className='titleSection'>{title}</p>}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};