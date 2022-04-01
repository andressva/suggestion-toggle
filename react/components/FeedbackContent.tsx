import React from 'react';
import PropTypes from 'prop-types';
import "../styles.global.css";

type OwnProps = {
    toggle: boolean,
    url: string
}

function FeedbackContent({ toggle, url }: OwnProps) {
    return (
        <div className={`feedbackContent ${toggle && 'toggle'}`}>
            <iframe
                id="surveylegend-survey"
                src={url}
                width="100%"
                height="1000px"
            >
            </iframe>
        </div>
    )
}

FeedbackContent.propTypes = {
    toggle: PropTypes.bool,
    url: PropTypes.string
}

export default FeedbackContent
