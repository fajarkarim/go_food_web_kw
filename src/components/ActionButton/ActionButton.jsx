import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = (props) => {
  const { label } = props;
  return (
      <button className={'shadow border-0 ripple text-white'}>
        <span className={'font-bold'}>{label}</span>
      </button>
  )
};

ActionButton.propTypes = {
  label: PropTypes.string
};

ActionButton.defaultProps = {
  label: 'none'
};

export default ActionButton;