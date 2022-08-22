import { ISendAuthor, ISendGenre } from "./index"

export interface ISendManga {
    id: number,
    mainTitle: string,
    alternativeTitle: string,
    linkImage: string,
    blobImage: Blob,
    description: string,
    status: string,
    rating: number,
    releaseDate: Date,
    lastUpdate: Date,
    authors: ISendAuthor[],
    genres: ISendGenre[]
};