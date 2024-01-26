import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function UserPage(props) {
    const user = useSelector(state => state.usersReducer)
    const theme = useSelector(state => state.themeReducer)
    console.log(theme)
    return (
        <div>
            <Link to="/">form page</Link>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    );
}

export default UserPage;