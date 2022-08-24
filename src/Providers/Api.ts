import axios from "axios";

const BaseUrl = "http://localhost:8080/unionmangas";

export const instance = axios.create({ baseURL: BaseUrl });

// Tratamento de resposta ou erro da Api
instance.interceptors.response.use(async (response) => {
    console.log("Response no interceptors:", response);
    return response
})