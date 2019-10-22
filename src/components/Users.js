import React from "react";
import User from "./User";

import { userList } from "./userList";

const Users = () => {
  return (
    <div className="right">
      <User
        alt="Billy"
        name="Billy"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />

      <div className="users__block">
        {userList.map(user => (
          <User src={user.src} alt={user.alt} name={user.name} min={user.min} />
        ))}
      </div>
    </div>
  );
};

export default Users;
