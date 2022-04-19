import React from "react";

const UsersList = ({users = {}}) => (
  <ul>
    {Object.entries(users).map(([user, count]) => <li key={user}>{user}:{count}</li>)}
  </ul>
);

export default UsersList;
