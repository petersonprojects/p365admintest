const initialState = {
    accentColor: 'blue'
}

const reducer = (state = initialState, action) => {


    switch(action.type)
    {
        case "LOAD_THEME":
            return{
                ...state,
                accentColor: action.data
            }

        default:
            return state;
    }

}

export default reducer;