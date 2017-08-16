import {combineReducers} from 'redux'
import counterReducer from './counter.jsx'
import articles from './articles.jsx'
import filters from './filters.jsx'

export default combineReducers({
    count: counterReducer,
    articles,
    filters
})