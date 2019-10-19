const departmentsReducers = (state = [], action) => {
    switch(action.type){
        case 'SET_DEPARTMENTS' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default departmentsReducers