const colorReducer = (state = '#ADD8E6', action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            // return {...state, colorSelect:action.payload.color};
            return state = action.payload;
        case 'RESET_COLOR':
            // return {...state, colorSelect:'ADD8E6'};
            return state = '#ADD8E6';
        default:
            return state;
    }
}

export default colorReducer;