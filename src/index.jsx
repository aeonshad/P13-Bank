import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store, { persistor } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Création d'une racine React pour le rendu de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans la racine créée
root.render(
    // Bloc du Provider Redux pour fournir le store aux composants de l'application
    <Provider store={store}>
        {/* Bloc du PersistGate pour la persistance de l'état de Redux */}
        <PersistGate loading={null} persistor={persistor}>
            <React.Fragment>
                {/* Composant principal de l'application */}
                <App />
            </React.Fragment>
        </PersistGate>
    </Provider>
);
