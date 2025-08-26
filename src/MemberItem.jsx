import React, { useState } from 'react';
import { UserIcon, CheckIcon } from '@heroicons/react/24/solid';

const MemberItem = ({ member }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <div 
  className={`flex items-center justify-between py-3 hover:bg-gray-50 rounded-lg px-4 border-2 border-gray-200`}
    
  onClick={handleToggle}
      
    >
      <div className={`flex items-center space-x-3 ${isSelected?"text-gray-500":"text-gray-300"}`}>
        <div className="flex items-center justify-center">
          <UserIcon className="w-4 h-4  " />
        </div>
        <span className=" font-medium">{member.name}</span>
      </div>

      <div 
        className={`w-6 h-6 border-2 rounded-full flex items-center justify-center cursor-pointer ${
          isSelected 
            ? 'border-green-500' 
            : ' border-gray-300'
        }`}
      >
        {isSelected && <CheckIcon className="w-4 h-4 text-green-500 " />}
      </div>
    </div>
  );
};

export default MemberItem;
