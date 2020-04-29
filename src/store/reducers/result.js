import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter((result) => result.id !== action.resultElId)
    return updateObject(state, {results: updatedArray});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
        // concat intead of push becuse we dont want to mutate the original one.
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT:            
            return deleteResult(state, action)
    }
    return state;
};

export default reducer;