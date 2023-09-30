import { useState } from "react";
import { postMovieValidation } from "../Validation/postMovieValidation";
import axios from "axios";
import "./PostMovie.css"

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
        image:"",
        torrent: ""
    });

    const handleChange = (e) => {
        setMovie({...movie, [e.target.name]: e.target.value});
        setError({...error, [e.target.name]: postMovieValidation(e.target.name, e.target.value)});
    };

    const handleFile = (e) => {
        if(e.target.files[e.target.files.length-1].name.split('.').pop()!=="torrent") {
          setError({...error, torrent: "Debe ser un archivo torrent" });
          return;
        }
        setError({...error, torrent: "" });
        setMovie({...movie, torrent: e.target.files[e.target.files.length-1]})
    };

    const handleSubmit = async() => {
        try {
            setMovie({...movie, year: Number(movie.year)});
           await axios.post(`http://localhost:3001/movie`, movie);
           window.alert("Se ha agregado la película")
        } catch (error) {
            window.alert("No se pudo agregar la película")
        }
    };

    return (
        <div className="global-container">
            <div className="h1"><h1 className="h1">Agrega una película</h1></div>
            <div className="first-container">
                <div className="first-form-div">
                    <div className="input-divs">
                        <label>Título<input name="title" value={movie.title} onChange={handleChange} type="text"></input></label>
                    </div>
                    <div className="input-divs"><p>{error.title}</p></div>
                    <div className="input-divs">
                        <label>Año<input name="year" value={movie.year} onChange={handleChange} type="text"></input></label>
                    </div>
                    <div className="input-divs"><p>{error.year}</p></div>
                    <div className="input-divs">
                        <label>Duración<input name="duration" value={movie.duration} onChange={handleChange} type="text"></input></label>
                    </div>
                    <div className="input-divs"><p>{error.duration}</p></div>
                    <div className="input-divs">
                        <label>Descripción<textarea name="description" value={movie.description} onChange={handleChange} ></textarea></label>
                    </div>
                    <div className="input-divs"><p>{error.description}</p></div>
                    <div className="input-divs">
                        <label>Lenguaje<input name="language" value={movie.language} onChange={handleChange} type="text"></input></label>
                    </div>
                    <div className="input-divs"><p>{error.language}</p></div>
                    <div className="input-divs">
                        <label>Torrent<input name="torrent" onChange={handleFile} type="file"></input></label>
                    </div>
                    <div className="input-divs"><p>{error.torrent}</p></div>
                </div>
                <div className="second-form-div">
                    <div>
                        <label>Imagen<input name="image" value={movie.image} onChange={handleChange} type="text"></input></label>
                    </div>
                    <div><p>{error.image}</p></div>
                    <div><img className="image-shown" src={movie.image} alt=""></img></div>
                </div>
            </div>
            {Object.values(movie).every((value) => value !== "" && value !== null) &&
            Object.values(error).every((errorMsg) => errorMsg === "")
            ? <button className="ok-val" onClick={handleSubmit}>Subir Película</button>
            : <p className="not-ok">Complete todos los campos correctamente</p>}
        </div>
    )
};
export default PostMovie;