import React from "react";
<b>Added Users: </b>;
const UsersList = ({ users = {} }) =>
    // <ul>
    //   {Object.entries(users).map(([user, count]) => <li key={user}>{user}:{count}</li>)}
    // </ul>

    Object.entries(users).map(([user]) => <>{user}, </>);

export default UsersList;
