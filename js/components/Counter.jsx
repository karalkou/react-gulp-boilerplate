import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {increment} from '../AC/index.jsx'

class Counter extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <a href="#" onClick={this.handleIncrement}>Increment</a>
            </div>
        )
    }

    handleIncrement = (ev) => {
        ev.preventDefault()
        this.props.increment()
    }
}

export default connect((state) => {
    return {
        count: state.count
    }
}, { increment })(Counter)