import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <input type="search" id="city" placeholder="type city" />

        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
