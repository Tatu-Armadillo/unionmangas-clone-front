import { AgeGroup } from "./index";

export interface ISendGenre {
    id_genre: number,
    name: string, 
    description: string, 
    age_group: AgeGroup,
}