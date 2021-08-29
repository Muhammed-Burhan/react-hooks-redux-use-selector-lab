import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";
function Users() {
  const state = useSelector((state) => state.users);
  const userCount = useSelector((state) => state.users.length);

  return (
    <div>
      <ul>
        Users!
        {state.map(({ username }) => {
          return <li key={username}>{username}</li>;
        })}
      </ul>
      Total Users: {userCount}
    </div>
  );
}

export default Users;
