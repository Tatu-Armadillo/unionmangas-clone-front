import axios, { AxiosError } from "axios";

const BaseUrl = "http://localhost:8080/unionmangas";
export const instance = axios.create({ baseURL: BaseUrl });

// Tratamento de resposta ou erro da Api
instance.interceptors.response.use(async (response) => {
    return response
}, function (error: AxiosError) {
    if (error.response) {
        const handleError = error.response
        return Promise.reject(handleError);
    }
    return Promise.reject(error);
})