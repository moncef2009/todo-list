import axios from "axios";

const API_URL = '/api/tasks/'


const createTask = async (taskData) => {
    console.log(taskData);
    const response = await axios.post(API_URL, taskData);
    return response.data
}

const getTask = async () => {
    const response = await axios.get(API_URL);
    console.log(response.data);
    return response.data
}

const taskService = {
    createTask, getTask
}

export default taskService