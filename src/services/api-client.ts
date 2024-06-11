import axios from "axios";

const token = localStorage.getItem("token");

export const apiClient = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        Authorization: "Bearer " + token,
    }
})