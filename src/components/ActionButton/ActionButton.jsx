import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = (props) => {
  const { label, onClick } = props;
  return (
      <button className={'shadow border-0 ripple text-white'} onClick={onClick} data-testid={'action-button'}>
        <span className={'font-bold'}>{label}</span>
      </button>
  )
};

ActionButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

ActionButton.defaultProps = {
  label: 'none'
};

export default ActionButton;