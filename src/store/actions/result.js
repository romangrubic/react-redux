import * as actionTypes from './actionTypes';

// action that will be executted after in code
export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
};

// for Handling asynchronous code with middleware redux-thunk
export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(result))
        }, 2000)
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    };
};