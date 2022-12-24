import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    return response.data
}

//Logout user
const logout = async () => {
    await axios.get(API_URL + 'logout')

}

//Login user 
const login = async (userData) => {
    await axios.post(API_URL + 'login', userData)

}
const authService = {
    register, logout, login
}

export default authService