import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

/* const FeedbackOptions = ({ options, onLeaveFeedback }) => {
 
    return (
      options.map((option) => {
      <button
        type="button"
        key={option}
        name={option}
        className={styles.button}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    
      }))
}; */

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          className={styles.button}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
