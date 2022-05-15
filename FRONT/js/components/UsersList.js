import React from "react";
<b>Added Users: </b>;
const UsersList = ({ users = {} }) =>
    Object.entries(users).map(([user, summary]) => (
        <b key={user}>
            {user}: {summary} zł,{" "}
        </b>
    ));

export default UsersList;
