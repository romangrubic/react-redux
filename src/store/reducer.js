import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                // concat intead of push becuse we dont want to mutate the original one.
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
        // const id = 2;
        // const newArray = [...state.results];
        // newArray.splice(id, 1)
        const updatedArray = state.results.filter((result) => result.id !== action.resultElId)
        return {
            ...state,
            results: updatedArray
        }
    }
    return state;
};

export default reducer;