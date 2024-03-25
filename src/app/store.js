import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Création du slice pour la gestion de l'authentification
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

// Création du slice pour la gestion des informations utilisateur
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

// Combinaison des slices dans le rootReducer
const rootReducer = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer,
});

// Configuration de la persistance des données
const persistConfig = {
    key: 'root',
    storage,
};

// Création du reducer persistant
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);

export default store;
