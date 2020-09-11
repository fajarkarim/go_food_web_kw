import React from 'react';

const HeaderWrapper = (props) => {
  return (
      <div className={'flex align-items-center one-hundred-percent-height'
      + ' ml-small mr-small justify-space-between'}>
        {props.children}
      </div>
  )
};

export default HeaderWrapper;