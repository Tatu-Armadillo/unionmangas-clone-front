import Form from 'react-bootstrap/Form';
//Service
import { useEffect, useState } from "react";
import { GenreService } from "../../Service";
//Interface
import { IGenre } from "../../Interfaces";

const InputMangas = () => {
    const [genres, setGenre] = useState<IGenre[]>([]);

    useEffect(() => {
        GenreService.getGenre()
            .then((res) => {
                setGenre(res.data)
            })
    }, [])

    return (
        <Form.Select aria-label="Default select example">
            <option>Selecione um gênero</option>
            {genres.map((genre, key) => {
                const genreFormat = genre.name[0].toUpperCase() + genre.name.slice(1).toLowerCase();
                return (
                    <option key={key} value={genreFormat}>{genreFormat}</option>
                )
            })}
        </Form.Select>
    )
}

export default InputMangas;