import { useState } from "react";
import { postMovieValidation } from "../Validation/postMovieValidation";
import axios from "axios";

const PostMovie = () => {

    const [movie, setMovie] = useState({
        title:"",
        duration:"",
        year:"",
        description:"",
        torrent: null,
        language:"",
        image:""
    });

    const [error, setError] = useState({
        title:"",
        duration:"",
        year:"",
        description:"",
        language:"",
        image:""
    });

    const handleChange = (e) => {
        setMovie({...movie, [e.target.name]: [e.target.value]})
        setError({...error, [e.target.name]: postMovieValidation([e.target.name], [e.target.value])})
    };

    const handleFile = (e) => {
        setMovie({...movie, torrent: e.target.files[0]})
    };

    const handleSubmit = async() => {
        try {
           await axios.post(`http://localhost:3001/pokemons`, movie);
        } catch (error) {
            window.alert("No se pudo agregar la película")
        }
    };

    return (
        <div>
            <h1>Agrega una película</h1>
            <div>
                <div>
                    <div>
                        <label>Título<input name="title" value={movie.title} onChange={handleChange} type="text"></input></label>
                    </div>
                    <div><p>{error.title}</p></div>
                    <div>
                        <label>Año<input name="year" value={movie.year} onChange={handleChange} type="text"></input></label>
                    </div>
                    <div><p>{error.year}</p></div>
                    <div>
                        <label>Duración<input name="duration" value={movie.duration} onChange={handleChange} type="text"></input></label>
                    </div>
                    <div><p>{error.duration}</p></div>
                    <div>
                        <label>Descripción<textarea name="description" value={movie.description} onChange={handleChange} ></textarea></label>
                    </div>
                    <div><p>{error.description}</p></div>
                    <div>
                        <label>Lenguaje<input name="language" value={movie.language} onChange={handleChange} type="text"></input></label>
                    </div>
                    <div><p>{error.language}</p></div>
                    <div>
                        <label>Torrent<input name="torrent" onChange={handleFile} type="file"></input></label>
                    </div>
                    <div>{movie.torrent && (<p>{movie.torrent.name}</p>)}</div>
                </div>
                <div>
                    <div>
                        <label>Imagen<input name="image" value={movie.image} onChange={handleChange} type="text"></input></label>
                    </div>
                    <div><p>{error.image}</p></div>
                    <div><img src={movie.image} alt="Poster de tu película"></img></div>
                </div>
            </div>
            {(movie.title.length&&movie.duration.length&&movie.year.length&&movie.description.length
            &&movie.language.length&&movie.image.length && !error.title.length&&!error.duration.length&&
            !error.year.length&&!error.description.length&&!error.language.length&&!error.image.length
            ?<button onClick={handleSubmit}>Subir Película</button>:"Complete todos los campos")}
        </div>
    )
};
export default PostMovie;