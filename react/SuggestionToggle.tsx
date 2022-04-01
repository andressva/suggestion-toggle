import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FeedbackButton from './components/FeedbackButton';
import FeedbackContent from './components/FeedbackContent';

type Props = {
  buttonText: string,
  iframeUrl: string
}

function SuggestionToggle({ buttonText, iframeUrl }: Props) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div>
      <FeedbackButton
        text={buttonText}
        toggle={toggle}
        handleToggle={handleToggle} />
      <FeedbackContent
        toggle={toggle}
        url={iframeUrl}
      />
    </div>
  )
}

SuggestionToggle.propTypes = {
  buttonText: PropTypes.string,
  iframeUrl: PropTypes.string
}

SuggestionToggle.defaultProps = {
  buttonText: "Sugerencias",
  iframeUrl: ""
}

export default SuggestionToggle
