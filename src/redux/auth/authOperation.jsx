import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.default.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const {data} = await axios.post('/users/signup', credentials);
        return data;
        //token.set(data.token);
    } catch (error) {
        //TODO добавить обработку ошибки
    }
});