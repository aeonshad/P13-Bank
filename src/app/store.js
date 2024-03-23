import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
    },
    reducers: {
        setUserJwt: (state, action) => {
            state.token = action.payload;
        },
    },
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: null,
        lastName: null,
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
    },
});

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
