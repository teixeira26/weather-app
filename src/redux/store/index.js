import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/index';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
