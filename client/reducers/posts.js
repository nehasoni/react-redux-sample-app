function posts(state=[],action){
    switch(action.type){
        case "INCREMENT_LIKES":
            const i = action.index
            return [
                ...state[0,i],
                {...state[i], likes:state[i].likes + 1},
                ...state[i+1]
            ]
        default:
            return state
    }
    return state

}

export default posts;