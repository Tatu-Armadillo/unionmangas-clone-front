import { AgeGroupEnum } from "./Enumerator";

export interface IGenre {
    id_genre: number,
    name: string,
    description: string,
    age_group: AgeGroupEnum,
}