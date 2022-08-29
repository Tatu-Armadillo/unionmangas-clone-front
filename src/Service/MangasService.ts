// API
import { instance } from "../Providers";

const getMangas = () => instance.get("/mangas", {
    headers: {
        "Content-Type": "application/json"
    }
})

const getMangasWeek = () => instance.get("/mangas/week", {
    headers: {
        "Content-Type": "application/json"
    }
})

export const MangasService = {
    getMangas,
    getMangasWeek
};