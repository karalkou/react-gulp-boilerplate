import React, { Component } from 'react'

class CommentList extends Component {

    state = {
        user: '',
        comment: ''
    };

    render() {
        return (
            <div>
                User: <input type="text" name="user" value={this.state.user} onChange={this.handleInputChange}/>
                <br/>
                Comment: <input type="text" name="comment" value={this.state.comment} onChange={this.handleInputChange}/>
                <br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }

    handleInputChange = (e) => {
        let name = e.target.name,
            value = e.target.value;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        console.log(this.state);
        this.setState({
            user: '',
            comment: ''
        })
    };
}

export default CommentList