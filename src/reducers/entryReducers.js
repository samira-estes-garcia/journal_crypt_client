const entriesReducer = (state = { entries: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_ENTRIES':
            return {
                ...state,
                loading: true
            }
        case 'GET_ENTRIES':
            return {
                ...state,
                entries: action.payload,
                loading: false
            }
        case 'GET_ENTRY':
            return {
                ...state,
                entry: action.payload,
                loading: false
            }
        case 'CREATE_ENTRY':
            return {
                ...state,
                entries: [...state.entries, action.payload],
            }
        default: 
            return state;
    }
}

export default entriesReducer;