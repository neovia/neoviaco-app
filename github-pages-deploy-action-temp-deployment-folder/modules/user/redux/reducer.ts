
import { createReducer } from '@reduxjs/toolkit';
import * as actionsUser from '../redux/actions';
import * as TypesUser from '../types/types'

const UserInitialState:TypesUser.UserInitialStateType = {
    uid:0,
    email:'',
}

export const reducerUser = createReducer(UserInitialState, (builder) => {
    return builder
     .addCase(actionsUser.UserIdAction, (state, action) => {
        return { ...state, uid: action.payload  }
     })
     .addCase(actionsUser.UserEmailAction, (state, action) => {
        return { ...state, email: action.payload  }
     })
})