const initialState = {
    isLight: true
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {isLight: !state.isLight}
        default:
            return state
    }
}