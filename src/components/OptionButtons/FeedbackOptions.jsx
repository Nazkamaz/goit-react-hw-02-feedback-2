import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({onLeaveFeedback, options})=>{
    return(
        <>
        {
            options.map(option => (<button 
            name={option}
            key={option}
            className={styles.feedback_buttons}
            onClick={onLeaveFeedback}>
                {option}</button>))
        }
        </>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default FeedbackOptions