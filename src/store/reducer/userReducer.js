const initState = {
    isLoggenIn: false,
    userInfo: null,
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggenIn: action.payload,
            };
        default:
            return state;
    }
   
}

export default userReducer;