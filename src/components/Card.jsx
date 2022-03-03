import React from 'react';
import SvgIcon from './SvgIcon';

const Card = ({
  backgroundColor,
  borderColor,
  capabilityName,
  numberOfskills,
  iconID,
}) => {
  return (
    <div className={`capaiblity-card-container ${borderColor}`}>
      <div className={`h-full border ${borderColor}`}>
        <div className={`capaiblity-card-header ${backgroundColor}`}>
          <SvgIcon
            iconID={iconID}
            classnames='mt-[0.75rem] w-[1.7rem]'
            fillColor='white'
          />

          <span className='text-2xl font-semibold text-gray-200 opacity-95'>
            {numberOfskills}
          </span>
        </div>
        <div className='py-2 pl-2'>
          <p className='pb-2 text-sm font-bold'>{capabilityName}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
