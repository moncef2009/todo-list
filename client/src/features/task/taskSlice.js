import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import taskService from './taskService'


const initialState = {
    tasks: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//creat new task

export const createTask = createAsyncThunk('task/create'
    , async (taskData, thunkAPI) => {
        try {
            return await taskService.createTask(taskData)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// get tasks
export const getTasks = createAsyncThunk('task/get'
    , async (_, thunkAPI) => {
        try {
            return await taskService.getTask()
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// delet task
export const deletTask = createAsyncThunk('task/delet'
    , async (taskData, thunkAPI) => {
        try {
            return await taskService.deletTask(taskData)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// updat task
export const updateTask = createAsyncThunk('task/update'
    , async (taskData, thunkAPI) => {
        try {
            console.log(taskData);
            return await taskService.updateTask(taskData)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)




export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTask.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.tasks.push(action.payload)
            })
            .addCase(createTask.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getTasks.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.tasks = action.payload

            })
            .addCase(getTasks.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deletTask.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deletTask.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.tasks = state.tasks.filter((task) => task._id !==
                    action.payload.id)

            })
            .addCase(deletTask.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateTask.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.tasks = state.tasks.map(task => task._id == action.payload._id ? action.payload : task)
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

    }
})


export const { reset } = taskSlice.actions
export default taskSlice.reducer