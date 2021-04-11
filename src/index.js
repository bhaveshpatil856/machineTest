import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import Thunk from 'redux-thunk';
import App from './app';
import reducers, { persistConfig } from './store';
import {persistReducer,persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


const persistReducers = persistReducer(persistConfig, reducers)

let store = createStore( persistReducers, applyMiddleware(Thunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={<h1>Loading.....</h1>}
                         persistor= {persistStore(store)}>
                <App/>
            </PersistGate>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);