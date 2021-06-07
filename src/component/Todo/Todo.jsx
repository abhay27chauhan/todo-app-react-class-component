import React, { Component } from 'react'
import Tasklist from '../Tasklist/Tasklist';

export default class Todo extends Component {
    state = {
        taskList: [],
        currTask: ""
    }

    handleCurrTask = (e) => {
        let value = e.target.value;

        this.setState({
            currTask: value
        })
    }

    addTask = () => {
        this.setState({
            taskList: [...this.state.taskList, {task: this.state.currTask, id: this.state.taskList.length}],
            currTask: ""
        })
    }

    deleteTask = (id) => {
        let filteredTask = this.state.taskList.filter(taskObj => taskObj.id !== id);

        this.setState({
            taskList: filteredTask
        })
    }

    render() {
        return (
            <div>
                <div className="input-container">
                    <input type="text" value={this.state.currTask} onChange={this.handleCurrTask} />
                    <button onClick={this.addTask}>submit</button>
                </div>
                <Tasklist taskList={this.state.taskList} deleteTask={this.deleteTask} />
            </div>
        )
    }
}

// Process -
//   1. imagine a static inital Ui and define it
//   2. identify different variable and add them to state
//   3. rewrite the render under those state variables
//   4. assign eventListeners to change state
//   4. whenever you will change the state i (react) will call the 
//         render function again 


// HTML forms
// In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
//We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.