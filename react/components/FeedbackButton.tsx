import React from 'react';
import PropTypes from 'prop-types';
import "../styles.global.css";

type OwnProps = {
    text: string,
    toggle: boolean,
    handleToggle: Function
}


function FeedbackButton({ text, toggle, handleToggle }: OwnProps) {
    return (
        <div className={`feedbackButton ${toggle && 'toggle'}`}>
            <button onClick={() => handleToggle()}>
                <div>
                    <div>{text}</div>
                </div>
            </button>
        </div>
    )
}

FeedbackButton.propTypes = {
    text: PropTypes.string,
    toggle: PropTypes.bool,
    handleToggle: PropTypes.func
}

export default FeedbackButton
