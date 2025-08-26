import React, { useState } from 'react';
import SearchInput
 from './SearchInput';
import MembersList from './MembersList ';
import ActionButton from "./ActionButton";

const AddMembersPage = () => {




  


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-sm w-full max-w-xl mx-auto flex flex-col items-center justify-center py-4" >

        <div className="p-6 pb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Add members to Front-end development team
          </h2>
        </div>

        <div className=" flex flex-col space-y-4 lg:w-lg md:w-md items-center justify-center">
          <SearchInput />
      <MembersList 
      />        </div>

        <ActionButton/>



      </div>
    </div>
  );
};

export default AddMembersPage;
