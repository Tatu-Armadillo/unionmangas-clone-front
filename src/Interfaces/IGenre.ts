import { AgeGroupEnum } from "./Enumerator";

export interface IGenre {
    id_genre: number | null,
    name: string,
    description: string | null,
    age_group: AgeGroupEnum | null,
}