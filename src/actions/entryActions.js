export const fetchEntries = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ENTRIES'  })
        let token = "Bearer " + localStorage.getItem("jwt");
        fetch('http://localhost:3001/api/entries', {method: "GET", headers: {"Authorization": token }})
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'GET_ENTRIES', payload: responseJSON})
        })
    }
}

export const fetchEntry = (id) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ENTRIES'  })
        let token = "Bearer " + localStorage.getItem("jwt");
        fetch(`http://localhost:3001/api/entries/${id}`, {method: "GET", headers: {"Authorization": token }})
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'GET_ENTRY', payload: responseJSON})
            console.log(responseJSON);
        })
    }
}

export const createEntry = (data, history) => {
    return(dispatch) => {
        let token = "Bearer " + localStorage.getItem("jwt");
        fetch('http://localhost:3001/api/entries', {
            method: "POST",
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ entry: data })
        }).then(function(response) {
            return response.json();
        }).then(responseJSON => {
            dispatch({ type: 'CREATE_ENTRY', payload: responseJSON})
            history.push(`/entries/${responseJSON.data.id}`);
            console.log(data);
        })
    }
}

// export const loginUser = (data) => {
//     fetch('http://localhost:3001/api/user_token', {
//             method: 'POST',
//             body: JSON.stringify({user: data}),
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(response => response.json())
//         .then(data => {
//             localStorage.setItem("jwt", data.jwt);
//             localStorage.setItem("user_id", data.userDetails.id);
//             localStorage.setItem("first_name", data.userDetails.first_name);
//             console.log(localStorage.getItem('user_id'));
//             //dispatch user info into global state
//             this.props.history.push('/entries');
//             //force rerender app
//         })
//         .catch(error => console.log('error', error));
// }