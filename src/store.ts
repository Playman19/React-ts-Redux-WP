import { Reducer } from "@reduxjs/toolkit";

export type rootState = {
    formValue: string;
}
export const initialState: rootState = {
    formValue: 'HELLOREDUX'
}

export const updateComment = (text:string) => {
    return {
        type: 'UPDATE_COMMENT',
        text:text
    }
}

export const rootReducer: Reducer = (state: rootState = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_COMMENT':
            return {
                ...state,
                formValue: action.text
            }
            break;
    
        default:
            return state
            break;
    }
}