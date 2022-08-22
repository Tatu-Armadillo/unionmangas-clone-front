import axios from "axios";

const BaseUrl = "http://localhost:8080/unionmangas";

export const ApiMangas = axios.create({ baseURL: BaseUrl, });

// Tratamento de resposta ou erro da Api
ApiMangas.interceptors.response.use(async (response) => {
    console.log("Response no interceptors:", response);
    return response
})