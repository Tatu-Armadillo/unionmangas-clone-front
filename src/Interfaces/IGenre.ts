import { AgeGroupEnum } from "./Enumerator/ageGroupEnum";


export interface IGenre {
    id_genre: number,
    name: string,
    description: string,
    age_group: AgeGroupEnum,
}