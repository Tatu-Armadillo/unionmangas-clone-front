import Form from 'react-bootstrap/Form';
import { FormProvider, useForm } from 'react-hook-form';
//Service
import { useEffect, useState } from "react";
import { GenreService } from "../../Service";
//Interface
import { IGenre, IManga } from "../../Interfaces";

const InputMangas = () => {
    const [genres, setGenre] = useState<IGenre[]>([]);
    const formMethods = useForm<IManga>();
    const { register, handleSubmit } = formMethods;

    useEffect(() => {
        GenreService.getGenre()
            .then((res) => {
                setGenre(res.data)
            })
    }, [])

    function Submit(values: IManga) {
        console.log(values);
    }

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(Submit)}>
                <div className="mb-3">
                    <label htmlFor="authors" className="form-label">authors</label>
                    <input type="text" {...register("authors")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mainTitle" className="form-label">Main Title</label>
                    <input type="text" {...register("mainTitle")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="alternativeTitle" className="form-label">Alternative Title</label>
                    <input type="text" {...register("alternativeTitle")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="linkImage" className="form-label">linkImage</label>
                    <input type="url" {...register("linkImage")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">description</label>
                    <input type="text" {...register("description")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">status</label>
                    <input type="text" {...register("status")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">rating</label>
                    <input type="number" {...register("rating")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="releaseDate" className="form-label">releaseDate</label>
                    <input type="text" {...register("releaseDate")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastUpdate" className="form-label">lastUpdate</label>
                    <input type="text" {...register("lastUpdate")} className="form-control" />
                </div>
                <Form.Select {...register('genres')}>
                    <option >Selecione um gênero</option>
                    {genres.map((genre, key) => {
                        const genreFormat = genre.name[0].toUpperCase() + genre.name.slice(1).toLowerCase();
                        return (
                            <option key={key} value={genreFormat}>{genreFormat}</option>
                        )
                    })}
                </Form.Select>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </FormProvider>
    )
}

export default InputMangas;