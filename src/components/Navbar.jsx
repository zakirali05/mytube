import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ search, setSearch, searching }) => {
  return (
    <nav className="bg-slate-800 p-4 h-12 border-b-[1px] bod flex items-center justify-between">
      <div className="logo">
        <em className="text-white font-bold text-xl">
          My<span className="text-red-400">Tube</span>
        </em>
      </div>
      <div className="serchbar">
        <form onSubmit={searching} className="bg-white px-1 rounded-md">
          <input
            className="p-1 md:w-[18rem]  border-r-2"
            type="text"
            placeholder="search something..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input className="text-black px-1" type="submit" value="Search" />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
