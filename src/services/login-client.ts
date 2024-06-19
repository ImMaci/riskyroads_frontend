import axios from "axios";

export const registerClient = axios.create({
    baseURL: "https://riskyroad.kessaft.com/api/auth/register"
});

export const loginClient = axios.create({
    baseURL: "https://riskyroad.kessaft.com/api/auth/authenticate"
});