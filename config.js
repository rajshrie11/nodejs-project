import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://node-jsproject.herokuapp.com/api"
})