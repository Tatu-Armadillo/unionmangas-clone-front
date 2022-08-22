import { ApiMangas } from "../Providers/Api";

const sendManga = () => ApiMangas.post("/mangas");

export const MangasService = {
    sendManga
};