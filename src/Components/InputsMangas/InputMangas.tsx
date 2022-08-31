import Form from 'react-bootstrap/Form';
//Service
import { useEffect, useState } from "react";
import { GenreService, MangasService } from "../../Service";
//Interface
import { IAuthor, IGenre, IManga } from "../../Interfaces";

const authorValue: IAuthor[] = [{
    id_author: null, pseudonym: "aaaaa", age: 0,
    name: 'joao', birthdate: new Date('2002-04-26')
}]

const genreValues: IGenre[] = [
    { name: 'escolar', age_group: null, description: null, id_genre: null }
]

const mangaValue: IManga = {
    mainTitle: 'teste asdasdasdas',
    alternativeTitle: 'teste 12121212',
    linkImage: 'https://totemti.atlassian.net/jira/software/c/projects/TGO/boards/169?selectedIssue=TGO-298',
    description: 'tes',
    status: 'ATIVO ',
    rating: 0,
    releaseDate: new Date('2002-04-26'),
    lastUpdate: new Date('2002-04-26'),
    genres: genreValues,
    authors: authorValue,
    blobImage: null,
    id_manga: null
}

const InputMangas = () => {
    const [genres, setGenre] = useState<IGenre[]>([]);
    const [values, setValues] = useState(mangaValue);

    function onChange(ev: any) {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    }

    function onSubmit() {
        MangasService.postManga(values);
    }

    useEffect(() => {
        GenreService.getGenre()
            .then((res) => {
                setGenre(res.data)
            })
    }, [])


    return (
        <div>
            <div className="mb-3">
                <label htmlFor="authors" className="form-label">authors</label>
                <input type="text" name='authors' className="form-control" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="mainTitle" className="form-label">Main Title</label>
                <input type="text" name='mainTitle' className="form-control" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="alternativeTitle" className="form-label">Alternative Title</label>
                <input type="text" name='alternativeTitle' className="form-control" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="linkImage" className="form-label">linkImage</label>
                <input type="url" name='linkImage' className="form-control" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">description</label>
                <input type="text" name='description' className="form-control" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="status" className="form-label">status</label>
                <input type="text" name='status' className="form-control" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="rating" className="form-label">rating</label>
                <input type="number" name='rating' className="form-control" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="releaseDate" className="form-label">releaseDate</label>
                <input type="text" name='releaseDate' className="form-control" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="lastUpdate" className="form-label">lastUpdate</label>
                <input type="text" name='lastUpdate' className="form-control" onChange={onChange} />
            </div>
            <Form.Select name='genres' onChange={onChange}>
                <option >Selecione um gênero</option>
                {genres.map((genre, key) => {
                    const genreFormat = genre.name[0].toUpperCase() + genre.name.slice(1).toLowerCase();
                    return (
                        <option key={key} value={genreFormat}>{genreFormat}</option>
                    )
                })}
            </Form.Select>
            <button type="submit" onClick={() => onSubmit()} className="btn btn-primary">Submit</button>
        </div>
    )
}

export default InputMangas;