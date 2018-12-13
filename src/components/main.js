import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import {syncHistoryWithStore, routerReducer as routing} from "react-router-redux";
import thunk from "redux-thunk";
import cardActionStore from "./../store/cardActionStore";
import createHistory from 'history/createBrowserHistory'

const store = createStore(
	combineReducers({
        routing,
        cardActionStore
    }),
	compose(
		applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

const history = syncHistoryWithStore(createHistory(), store)

export default {store, history};