import React from 'react';
import iconsPaths from '../constants/icons';

const SvgIcon = ({ iconID, classnames, fillColor }) => {
  return (
    <svg
      className={classnames}
      viewBox='0 0 22 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d={iconsPaths[iconID]} fill={fillColor ? fillColor : 'none'} />
    </svg>
  );
};

export default SvgIcon;
