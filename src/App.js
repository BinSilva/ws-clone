import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyClONFwZY_PGBhPlVveb6V3spEaH7THnvs',
            authDomain: 'whatsapp-clone-robin.firebaseapp.com',
            databaseURL: 'https://whatsapp-clone-robin.firebaseio.com',
            projectId: 'whatsapp-clone-robin',
            storageBucket: 'whatsapp-clone-robin.appspot.com',
            messagingSenderId: '578710457598'
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
