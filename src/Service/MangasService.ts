import { instance } from "../Providers";

const getManga = () => instance.get("/mangas", {
    headers: {
        "Content-Type": "application/json"
    }
})

export const MangasService = {
    getManga
};