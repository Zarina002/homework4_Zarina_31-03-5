const initialState = {
    name: "",
    age: ""
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_INFO":
            return action.payload
        case "CHANGE":
            return {
                name: "ASd",
                age: "12"
            }
        default:
            return state
    }
}