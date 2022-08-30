import { createAction } from "@reduxjs/toolkit";

export const UserEmailAction = createAction<string>('user/email');
export const UserIdAction = createAction<number>('user/id');