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
            <option>Open this select menu</option>
            {genres.map((genre, key) => {
                let genreFormat = genre.name;
                console.log(genreFormat);
                
                return (
                    <option key={key} value={genreFormat}>{genreFormat}</option>
                )

            })}
        </Form.Select>
    )
}

export default InputMangas;