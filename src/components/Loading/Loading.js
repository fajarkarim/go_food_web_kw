import React from 'react'
import LoadingGif from '../../assets/loading2.gif';

const Loading = () => {
  return (
      <div className={'flex justify-center align-items-center'}>
        <img src={LoadingGif} alt={'loading'} height={320}  />
      </div>
  )
};

export default Loading;