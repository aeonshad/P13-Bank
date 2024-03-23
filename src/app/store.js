import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);

export default store;
