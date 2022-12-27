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

const deletTask = async (id) => {
    const response = await axios.delete(API_URL + id)
    return response.data

}

const updateTask = async (Data) => {
    console.log(Data[1]);
    const response = await axios.put(API_URL + Data[0], Data[1])
    return response.data
}
const taskService = {
    createTask, getTask, deletTask, updateTask
}

export default taskService