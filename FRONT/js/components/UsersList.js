import React from "react";

const UsersList = ({ users = {} }) =>
    // <ul>
    //   {Object.entries(users).map(([user, count]) => <li key={user}>{user}:{count}</li>)}
    // </ul>

    Object.entries(users).map(([user, count]) => <>{user}, </>);

export default UsersList;
