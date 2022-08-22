import { IAuthor } from "./IAuthor";
import { IGenre } from "./IGenre";

export interface IManga {
    id: number,
    mainTitle: string,
    alternativeTitle: string | null,
    linkImage: string,
    blobImage: Blob | null,
    description: string,
    status: string,
    rating: number,
    releaseDate: Date,
    lastUpdate: Date,
    authors: IAuthor[],
    genres: IGenre[]
};