import React from "react";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li><h1 className="nav-link">Coffee Meets Summoner</h1></li>
        <li><a href='#' className="nav-link">Home</a></li>
        <li><a href='#' className="nav-link">Chats</a></li>
        <li><a href='#' className="nav-link">Logout</a></li>
       </ul>
    </div>
  );
}
