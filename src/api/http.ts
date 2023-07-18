import axios from "axios";

const baseUrl = "HTTP";

export const http = axios.create({
    baseURL: baseUrl,
});