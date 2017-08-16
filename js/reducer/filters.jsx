import {SELECT_CHANGE, DATE_RANGE_CHANGE} from '../constants.jsx';

const defaultFilters = {
    selection: [],
    dateRange: {
        from: null,
        to: null
    }
};

export default (filters = defaultFilters, action) => {
    const {type, payload} = action;

    switch (type) {
        case SELECT_CHANGE:
             return {...filters, selection: payload.selection};
    }

    switch (type) {
        case DATE_RANGE_CHANGE:
             return {...filters, dateRange: payload.dateRange};
    }

    return filters
}