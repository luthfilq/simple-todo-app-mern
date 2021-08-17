import { Component } from "react";
import {
    addTask,
    getTasks,
    updateTask,
    deleteTask,
} from "../services/taskServices";

class Tasks extends Component {
    state = { tasks: [], currentTaskName: "" };

    async componentDidMount() {
        try {
            const { data } = await getTasks();
            this.setState({ tasks: data });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ currentTaskName: input.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const originalTasks = this.state.tasks;
        try {
            const { data } = await addTask({ task_name: this.state.currentTaskName });
            const updatedTasks = originalTasks;
            updatedTasks.push(data);
            this.setState({ tasks: updatedTasks, currentTaskName: "" });
        } catch (error) {
            console.log(error);
        }
    };

    handleUpdate = async (taskIdRequest) => {
        const originalTasks = this.state.tasks;
        try {            
            const updatedTasks = [...originalTasks];            
            const index = updatedTasks.findIndex((task) => task._id === taskIdRequest);            
            updatedTasks[index].completed = !updatedTasks[index].completed;
            this.setState({ tasks: updatedTasks });
            await updateTask(taskIdRequest, {
                completed: updatedTasks[index].completed,
            });
        } catch (error) {
            this.setState({ tasks: originalTasks });
            console.log(error);
        }
    };

    handleDelete = async (taskIdRequest) => {
        const originalTasks = this.state.tasks;
        try {
            const updatedTasks = originalTasks.filter(
                (task) => task._id !== taskIdRequest
            );
            this.setState({ tasks: updatedTasks });
            await deleteTask(taskIdRequest);
        } catch (error) {
            this.setState({ tasks: originalTasks });
            console.log(error);
        }
    };
}

export default Tasks;
