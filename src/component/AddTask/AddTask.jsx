import React, { Component } from 'react'

export default class AddTask extends Component {
    state = {
        currTask: ""
    }

    handleCurrTask = (e) => {
        let value = e.target.value;

        this.setState({
            currTask: value
        })
    }

    sendTaskToParent = () => {
        this.props.addTask(this.state.currTask)
        this.setState({
            currTask: ""
        })
    }
    render() {
        return (
            <div className="input-container">
                <input type="text" value={this.state.currTask} onChange={this.handleCurrTask} />
                <button onClick={this.sendTaskToParent}>submit</button>
            </div>
        )
    }
}
