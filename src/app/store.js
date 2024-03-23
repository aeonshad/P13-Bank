import { configureStore, createSlice } from '@reduxjs/toolkit';

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

const store = configureStore({ reducer: { auth: authSlice.reducer } });
export default store;
