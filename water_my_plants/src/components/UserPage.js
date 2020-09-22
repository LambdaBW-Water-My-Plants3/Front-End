import React, { useState, useEffect } from "react";
import axios from "axios";

function UserPage() {

    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('https://watermyplantunit4.herokuapp.com/users/user/name/admin')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <h2>user page</h2>
        </div>
    )
}

export default UserPage
