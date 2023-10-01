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
        image:"",
        genre:[]
    });

    const [error, setError] = useState({
        title:"",
        duration:"",
        year:"",
        description:"",
        language:"",
        image:"",
        torrent: "",
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

    const handleGenre = (e) => {
        if(movie.genre.includes(e.target.value)) {
            setMovie({...movie, genre: [...movie.genre.filter((genre)=>genre!==e.target.value)]})
        }
        else {
            setMovie({...movie, genre: [...movie.genre, e.target.value]});
        }
    };

    return (
        <div className="global-container">
            <div className="h1"><h1 className="h1">Agrega una película</h1></div>
            <div className="first-container">
                <div className="first-form-div">
                    <div className="input-divs">
                        <label>Título</label>
                        <input className={error.title!==""?"wrong":""} name="title" value={movie.title} onChange={handleChange} type="text"></input>
                    </div>
                    <div className="input-divs"><p>{error.title}</p></div>
                    <div className="input-divs">
                        <label>Año</label>
                        <input className={error.year!==""?"wrong":""} name="year" value={movie.year} onChange={handleChange} type="text"></input>
                    </div>
                    <div className="input-divs"><p>{error.year}</p></div>
                    <div className="input-divs">
                        <label>Duración</label>
                        <input className={error.duration!==""?"wrong":""} name="duration" value={movie.duration} onChange={handleChange} type="text"></input>
                    </div>
                    <div className="input-divs"><p>{error.duration}</p></div>
                    <div className="input-divs">
                        <label>Descripción</label>
                        <textarea className="description" name="description" value={movie.description} onChange={handleChange} ></textarea>
                    </div>
                    <div className="input-divs"><p>{error.description}</p></div>
                    
                    
                </div>
                <div className="second-form-div">
                    <div className="input-divs">
                        <label>Imagen URL</label>
                        <input className={error.image!==""?"wrong":""} name="image" value={movie.image} onChange={handleChange} type="text"></input>
                    </div>
                    <div className="input-divs"><p>{error.image}</p></div>
                    <div><img className="image-shown" src={movie.image} alt=""></img></div>
                    <div className="input-divs">
                        <label>Torrent</label>
                        <input name="torrent" onChange={handleFile} type="file"></input>
                    </div>
                    <div className="input-divs"><p>{error.torrent}</p></div>
                </div>
                <div className="first-form-div">
                    <div className="input-divs">
                        <label>Lenguaje</label>
                        <input className={error.language!==""?"wrong":""} name="language" value={movie.language} onChange={handleChange} type="text"></input>
                    </div>
                    <div className="input-divs"><p>{error.language}</p></div>
                    <div className="checkbox-container">
                        <p>Géneros</p>
                        <label>Acción</label>
                        <input name="genre" value="Accion" onChange={handleGenre} type="checkbox"></input>
                        <label> Aventura</label>
                        <input name="genre" value="Adventure" onChange={handleGenre} type="checkbox"></input>
                        <label> Animación</label>
                        <input name="genre" value="Animation" onChange={handleGenre} type="checkbox"></input>
                        <label> Biografía</label>
                        <input name="genre" value="Biografia" onChange={handleGenre} type="checkbox"></input>
                        <label> Comedia</label>
                        <input name="genre" value="comedy" onChange={handleGenre} type="checkbox"></input>
                        <label> Documental</label>
                        <input name="genre" value="documentary" onChange={handleGenre} type="checkbox"></input>
                        <label> Drama</label>
                        <input name="genre" value="drama" onChange={handleGenre} type="checkbox"></input>
                        <label> Familia</label>
                        <input name="genre" value="family" onChange={handleGenre} type="checkbox"></input>
                        <label> Fantasía</label>
                        <input name="genre" value="fantasy" onChange={handleGenre} type="checkbox"></input>
                        <label> Film Noir</label>
                        <input name="genre" value="FilmNoir" onChange={handleGenre} type="checkbox"></input>
                        <label> Historia</label>
                        <input name="genre" value="history" onChange={handleGenre} type="checkbox"></input>
                        <label> Terror</label>
                        <input name="genre" value="terror" onChange={handleGenre} type="checkbox"></input>
                        <label> Musical</label>
                        <input name="genre" value="musical" onChange={handleGenre} type="checkbox"></input>
                        <label> Misterio</label>
                        <input name="genre" value="mistery" onChange={handleGenre} type="checkbox"></input>
                        <label> Romance</label>
                        <input name="genre" value="romance" onChange={handleGenre} type="checkbox"></input>
                        <label> Sci Fi</label>
                        <input name="genre" value="scienceFiction" onChange={handleGenre} type="checkbox"></input>
                        <label> Shorts</label>
                        <input name="genre" value="shorts" onChange={handleGenre} type="checkbox"></input>
                        <label> Deportes</label>
                        <input name="genre" value="sports" onChange={handleGenre} type="checkbox"></input>
                        <label> Suspenso</label>
                        <input name="genre" value="suspense" onChange={handleGenre} type="checkbox"></input>
                        <label> Guerra</label>
                        <input name="genre" value="warlike" onChange={handleGenre} type="checkbox"></input>
                        <label> Western</label>
                        <input name="genre" value="west" onChange={handleGenre} type="checkbox"></input>
                    </div>
                    <div className="input-divs"><p>{movie.genre.length===0?"Agregue al menos un género":""}</p></div>
                </div>
            </div>
            {Object.values(movie).every((value) => value !== "" && value !== null) &&
            Object.values(error).every((errorMsg) => errorMsg === ""&&movie.genre.length>0)
            ? <button className="ok-val" onClick={handleSubmit}>Subir Película</button>
            : <p className="not-ok">Complete todos los campos correctamente</p>}
        </div>
    )
};
export default PostMovie;