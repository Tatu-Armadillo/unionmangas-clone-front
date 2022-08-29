// API
import { instance } from "../Providers";

const getGenre = () => instance.get("/genres", {
    headers: {
        "Content-Type": "application/json"
    }
})

export const GenreService = {
    getGenre
};