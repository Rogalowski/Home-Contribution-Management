import React from "react";
<b>Added Users: </b>;
const UsersList = ({ users }) =>
    // Object.entries(users).map(([user, summary]) => (
    //     <b key={user}>
    //         {user}: {summary} zł,{" "}
    //     </b>
    // ));
    users.map((user) => (
        <b key={user.user}>
            {user.user}: {user.spent} zł,{" "}
        </b>
    ));

export default UsersList;
