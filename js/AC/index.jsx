import {INCREMENT, DELETE_ARTICLE, SELECT_CHANGE, DATE_RANGE_CHANGE} from '../constants.jsx'

export function increment() {
    const action = {
        type: INCREMENT
    };

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectChange(selection) {
    return {
        type: SELECT_CHANGE,
        payload: { selection }
    }
}

export function dateRangeChange(dateRange) {
    return {
        type: DATE_RANGE_CHANGE,
        payload: { dateRange }
    }
}