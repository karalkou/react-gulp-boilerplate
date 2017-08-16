import {INCREMENT} from '../constants.jsx'

export default (count = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return count + 1
    }

    return count
}