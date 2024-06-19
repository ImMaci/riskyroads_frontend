import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://riskyroad.kessaft.com/api",
})