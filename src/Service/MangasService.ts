// API
import { IAuthor, IManga } from "../Interfaces";
// Interface
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

const postManga = (data: IManga) => instance.post("/mangas", data, {
    headers: {
        "Content-Type": "application/json"
    }
})

const postAuthor = (data: IAuthor) => instance.post("/author", data, {
    headers: {
        "Content-Type": "application/json"
    }
})

export const MangasService = {
    getMangas,
    getMangasWeek,
    postManga,
    postAuthor
};