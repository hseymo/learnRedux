const countReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            // return {...state, counter: counter += 1};
            return state + 1;
        case 'DECREMENT':
            // return {...state, counter: counter -= 1};
            return state -1;
        case 'RESET_COUNT':
            // return {...state, counter: 0};
            return state = 0;
        default:
            return state;
    }
}

export default countReducer;