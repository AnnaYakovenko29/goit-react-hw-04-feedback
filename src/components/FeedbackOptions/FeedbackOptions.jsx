import PropTypes from 'prop-types';
import './FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className='feedbackOptions'>
      {options.map((option, index) => {
        const label = option.charAt(0).toUpperCase() + option.slice(1);

        return (
            <div key={index}>
              <button
                className="btn"
                type="button"
                onClick={() => onLeaveFeedback(option)}
              >
                {label}
              </button>
            </div>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
