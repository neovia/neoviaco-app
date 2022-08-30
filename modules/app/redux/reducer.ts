
import { createReducer } from '@reduxjs/toolkit';
import * as TypesApp from '../types/types';
import * as actionApp from './actions';

const AppInitialState:TypesApp.AppInitialStateType = {
    item_example: '',
}

export const reducerApp = createReducer(AppInitialState, (builder) => {
    return builder
    .addCase(actionApp.AppExampleAction, (state, action) => {
        return { ...state, item_example: action.payload  }
     })

})