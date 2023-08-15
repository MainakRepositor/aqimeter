import React from 'react';

const SearchBar = ({ search, setSearch, handleSearch }) => (
  <div className="pt-10 mx-auto max-w-md ">
    <form
      action=""
      onSubmit={(e) => handleSearch(e)}
      className="relative mx-auto w-max"
    >
      <input
        className="peer cursor-pointer relative z-10 h-12 rounded-full border bg-transparent pl-12 outline-none w-full focus:cursor-text focus:border-black focus:pl-16 focus:pr-4"
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-black peer-focus:stroke-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </form>
  </div>
);
export default SearchBar;
