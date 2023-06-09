import './Statistics.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className="statistics">
        <span className='titleStatistics'>Good: {good}</span>
        <span className='titleStatistics'>Neutral: {neutral}</span>
        <span className='titleStatistics'>Bad: {bad}</span>
        <span className='titleStatistics'>Total: {total}</span>
        <span className='titleStatistics'>Positive feedback: {positivePercentage}%</span>
      </div>
    )}

    Statistics.propTypes = {
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      positivePercentage: PropTypes.number.isRequired,
    };