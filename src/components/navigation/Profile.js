import React from 'react';

class Profile extends React.Component {
    render() {
        return(
            <div className="text-center p-3">
                <h1>{localStorage.getItem("first_name")}</h1>
            </div>
        )
    }
}

export default Profile;