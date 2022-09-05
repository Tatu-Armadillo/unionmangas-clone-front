//Service
import { useState } from "react";
//Interface
import { IAuthor } from "../../Interfaces";
import { MangasService } from '../../Service';

const InputMangas = () => {
    const [name, setName] = useState("");
    const [dataStr, setDataStr] = useState("");
    const [pseudonym, setPseudonym] = useState("");
    function post() {
        const authors: IAuthor = {
            id_author: 0,
            name: name,
            pseudonym: pseudonym,
            age: null,
            birthdate: dataStr
        }
        MangasService.postAuthor(authors)
    }

    return (
        <div>
            <div className="mb-3" >
                <label htmlFor="authors" className="form-label">authors</label>
                <input type="text" name="authors" className="form-control" onChange={(name) => setName(name.target.value)} />
            </div>
            <div className="mb-3" >
                <label htmlFor="authors" className="form-label">pseudonym</label>
                <input type="text" name="birthdate" className="form-control" onChange={(pseudonym) => setPseudonym(pseudonym.target.value)} />
            </div>
            <div className="mb-3" >
                <label htmlFor="authors" className="form-label">birthdate</label>
                <input type="date" name="birthdate" className="form-control" onChange={(birthdate) => setDataStr(birthdate.target.value)} />
            </div>
            <button type="submit" onClick={() => post()}>Submit</button>
        </div>
    )
}

export default InputMangas;