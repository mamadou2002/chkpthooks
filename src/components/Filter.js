import React, { useState } from "react";
import { data } from "./data";




const Filter = (props) => {

 const [search, setNewSearch] = useState('');

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? data
    : data.filter((Movie) =>
        data.movieName.toLowerCase().includes(search.toLowerCase())
      );
      console.log(data)

  return (
    <>
      Filter Movie:{}
      <input type="text" value={search} onChange={handleSearchChange}  />
      <h2>My Movie</h2>
      {filtered.map((data) => {
        return (
          <p key={data.movieName}>
         
          </p>
        );
      }
      )
      }
    </>
  );
};

export default Filter





