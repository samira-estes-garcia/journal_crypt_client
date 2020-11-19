export const fetchEntries = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ENTRIES'  })
        fetch('http://localhost:3000/entries')
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'GET_ENTRIES', payload: responseJSON})
        })
    }
}