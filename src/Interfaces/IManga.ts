import { IAuthor, IGenre } from "./index"

export interface IManga {
    id_manga: number | null,
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