import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchInput = () => {
  return (
    <div className="relative w-full  mb-8">
      {/* Icon */}
      <MagnifyingGlassIcon className="absolute left-1 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 " />

      {/* Input */}
      <input
        type="text"
        placeholder="Find members"
        className="border-b-2 border-gray-200 placeholder:text-gray-400 py-2 pl-8  pr-4 w-full outline-none"
      />
    </div>
  );
};

export default SearchInput;
