import { IManga } from "../Interfaces";
import { ApiMangas } from "../Providers/Api";

const sendManga = (data: IManga) => ApiMangas.post("/mangas", data)

export const MangasService = {
    sendManga
};