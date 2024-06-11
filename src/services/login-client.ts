import axios from "axios";

export const registerClient = axios.create({
    baseURL: "http://localhost:8080/auth/register"
});

export const loginClient = axios.create({
    baseURL: "http://localhost:8080/auth/authenticate"
});