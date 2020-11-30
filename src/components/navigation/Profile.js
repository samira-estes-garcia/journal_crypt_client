import React from 'react';

class Profile extends React.Component {
    render() {
        return(
            <div>
                <h1>{localStorage.getItem("first_name")}</h1>
            </div>
        )
    }
}

export default Profile;