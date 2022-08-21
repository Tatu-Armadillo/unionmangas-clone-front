import axios from "axios";

const BaseUrl = "http://localhost:8080/unionmangas/mangas";

export const ApiMangas = axios.create({
    baseURL: BaseUrl,
    headers: {
        "Content-Type": "application/json"
    }
})