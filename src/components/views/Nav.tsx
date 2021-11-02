import React from "react";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-left">
        <img src="" width={250} height={250} alt="logo image" />
      </div>

      <div className="nav-right">
        <p>Home</p>
        <p>Chats</p>
        <p>Logout</p>
      </div>
    </div>
  );
}
