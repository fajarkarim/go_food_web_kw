import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = (props) => {
  const { label } = props;
  return (
      <button>{label}</button>
  )
};

ActionButton.propTypes = {
  label: PropTypes.string
};

ActionButton.defaultProps = {
  label: 'none'
};

export default ActionButton;