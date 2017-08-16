import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import App from './App.jsx'
import store from '../store/index.jsx'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store={store}>
                <App articles={this.props.articles} />
            </Provider>
        )
    }
}

export default Root