import React from "react";
import Tasks from "./components/Tasks";
import "./App.css";

class App extends Tasks { 
    render() {
        const { tasks } = this.state;
        return (
            <div className="App flex">
                <div>                    
                    <h1>TO-DO</h1>

                    <form onSubmit={this.handleSubmit} id="form-submit-new-task">
                        <input 
                            type="text" 
                            placeholder="Add New TO-DO"                           
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}/>
                        <button type="submit">Add Task</button>
                    </form>

                    <div id="list-of-tasks">
                        {tasks.map((task) => (
                            <div
                                key={task._id}
                                className="flex"
                            >
                                <input type="checkbox" checked={task.completed} onClick={() => this.handleUpdate(task._id)}/>                                
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.task_name}
                                </div>
                                <button onClick={() => this.handleDelete(task._id)}>X</button>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        );
    }
}

export default App;
