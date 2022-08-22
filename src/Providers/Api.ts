import axios from "axios";

const BaseUrl = "http://localhost:8080/unionmangas";

export const ApiMangas = axios.create({ baseURL: BaseUrl, })