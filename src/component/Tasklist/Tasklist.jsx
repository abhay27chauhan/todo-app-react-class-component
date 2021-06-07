import React, { Component } from 'react'

export default class Tasklist extends Component {
    render() {
        return (
            <div className="task-list">
                <ul>
                    {
                        this.props.taskList.map(taskObj => (
                            <li className="task" key={taskObj.id}>
                                <p>{taskObj.task}</p>
                                <button onClick={() => this.props.deleteTask(taskObj.id)} >delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
