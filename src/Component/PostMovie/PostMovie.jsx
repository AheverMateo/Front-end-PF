import { useEffect, useState, useRef } from "react";
import { postMovieValidation } from "../Validation/postMovieValidation";
import axios from "axios";
import "./PostMovie.css";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css";
import logo from "../../assets/NONFLIX-LOGO.png";
import { Link } from "react-router-dom";

//http://localhost:3001/Nonflix/movies/genres

const PostMovie = () => {
  const [movie, setMovie] = useState({
    title: "",
    duration: "",
    trailer: "",
    year: "",
    description: "",
    torrent: null,
    language: "",
    image: "",
    genre: [],
  });

  const [error, setError] = useState({
    title: "",
    duration: "",
    trailer: "",
    year: "",
    description: "",
    language: "",
    image: "",
    torrent: "",
  });

  const [genres, setGenres] = useState([]);

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    setError({
      ...error,
      [e.target.name]: postMovieValidation(e.target.name, e.target.value),
    });
  };

  const handleFile = (e) => {
    if (
      e.target.files[e.target.files.length - 1].name.split(".").pop() !==
      "torrent"
    ) {
      setError({ ...error, torrent: "Debe ser un archivo torrent" });
      return;
    }
    setError({ ...error, torrent: "" });
    setMovie({ ...movie, torrent: e.target.files[e.target.files.length - 1] });
  };

  const handleSubmit = async () => {
    try {
      setMovie({ ...movie, year: Number(movie.year) });
      await axios.post(`/Nonflix/movies/`, movie);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Movie added to catalog",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The movie was not created",
        footer: error.response.data,
      });
    }
  };

  const handleGenre = (e) => {
    if (movie.genre.includes(e.target.value)) {
      setMovie({
        ...movie,
        genre: [...movie.genre.filter((genre) => genre !== e.target.value)],
      });
    } else {
      setMovie({ ...movie, genre: [...movie.genre, e.target.value] });
    }
  };

  useEffect( () => {
    const genres = async () => {
      return await axios
        .get("/Nonflix/movies/genres")
        .then((response) => {
          const res = response.data.map((genre) => genre.id);
          setGenres(res)
        });
    };

    genres();
    
  }, []);

  useEffect(() => {
    console.log('genres', genres)
  }, [genres]);


  const [activeButton, setActiveButton] = useState("image-button");

  // cloudinary upload widget
  const cloudinaryRef = useRef();
  const widgetRef = useRef()
  
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dy8pp1s5f",
        uploadPreset: "imagenes_admins",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          const imageUrl = result.info.url;
          if (activeButton === "image-button") {
            setMovie((prevMovie) => ({
              ...prevMovie,
              image: imageUrl,
            }));
          } else if (activeButton === "trailer-button") {
            setMovie((prevMovie) => ({
              ...prevMovie,
              trailer: imageUrl,
            }));
          }
        }
      }
    );
  }, [activeButton]);

  const handleImageUpload = () => {
    setActiveButton("trailer-button");
    widgetRef.current.open();
    // console.log(activeButton)
  };

  const handleTrailerUpload = () => {
    setActiveButton("image-button");
    widgetRef.current.open();
    // console.log(activeButton)
  };



  
  return (
    <div className="global-container">
      <div className="h1">
        <Link to="/Home"><img className="post-logo" src={logo}/></Link>
        <h1 className="h1">Add new movie to catalog</h1>
        <Link to="/Dashboard"><button className="dashboardButton">Back to dashboard</button></Link>
      </div>
      <div className="first-container">
        <div className="first-form-div">
          <div className="input-divs">
            <label>Title</label>
            <input
              className={error.title !== "" ? "wrong" : ""}
              name="title"
              value={movie.title}
              onChange={handleChange}
              type="text"
            ></input>
          </div>
          <div className="input-divs">
            <p className="not-ok">{error.title}</p>
          </div>
          <div className="input-divs">
            <label>Year</label>
            <input
              className={error.year !== "" ? "wrong" : ""}
              name="year"
              value={movie.year}
              onChange={handleChange}
              type="text"
            ></input>
          </div>
          <div className="input-divs">
            <p className="not-ok">{error.year}</p>
          </div>
          <div className="input-divs">
            <label>Duration</label>
            <input
              className={error.duration !== "" ? "wrong" : ""}
              name="duration"
              value={movie.duration}
              onChange={handleChange}
              type="text"
            ></input>
          </div>
          <div className="input-divs">
            <p className="not-ok">{error.duration}</p>
          </div>
          <div className="input-divs">
            <label>Description</label>
            <textarea
              className="description"
              name="description"
              value={movie.description}
              onChange={handleChange}
            ></textarea>
          </div><br></br>
          <div className="input-divs">
            <label>Torrent</label>
            <input name="torrent" onChange={handleFile} type="file"></input>
          </div>
          <div className="input-divs">
            <p className="not-ok">{error.torrent}</p>
          </div>
          <div className="input-divs">
            <p className="not-ok">{error.description}</p>
          </div>
        </div>
        <div className="second-form-div">
          <div className="input-divs">
            <label>Cover URL</label>
            <input
              className={error.image !== "" ? "wrong" : ""}
              name="image"
              value={movie.image}
              onChange={handleChange}
              type="text"
            ></input>
          </div>
          <div className="input-divs">
            <p className="not-ok spacing">{error.image}</p>

            <button className="uploadButton " onClick={handleImageUpload}>
                  Upload Image
            </button>
            <img className="image-shown" src={movie.image ? movie.image : ""}></img>
          </div>
          <div className="input-divs">
            <label>Trailer URL</label>
            <input
              className={error.trailer !== "" ? "wrong" : ""}
              name="trailer"
              value={movie.trailer}
              onChange={handleChange}
              type="text"
            ></input>
          </div>
          <div className="input-divs">
            <p className="not-ok spacing">{error.trailer}</p>

            <button className="uploadButton " onClick={handleTrailerUpload}>
                  Upload Trailer
            </button>
          </div>
        </div>
        <div className="third-form-div">
          <div className="input-divs">
            <label>Language</label>
            <select
              className={error.language !== "" ? "wrong" : ""}
              name="language"
              value={movie.language}
              onChange={handleChange}
              >
              <option value="">Select a Language!</option>
              <option value="Spanish">Spanish</option>
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
          <div className="input-divs">
            <p className="not-ok">{error.language}</p>
          </div>
          <p className="generos-margin">Genres</p>
          <div className="checkbox-container">
            <div>
              <label>Action</label>
              <input
                name="genre"
                value="Accion"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Adventure</label>
              <input
                name="genre"
                value="Adventure"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Animation</label>
              <input
                name="genre"
                value="Animation"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Biography</label>
              <input
                name="genre"
                value="Biografia"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Comedy</label>
              <input
                name="genre"
                value="comedy"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Documentary</label>
              <input
                name="genre"
                value="documentary"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Drama</label>
              <input
                name="genre"
                value="drama"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Family</label>
              <input
                name="genre"
                value="family"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Fantasy</label>
              <input
                name="genre"
                value="fantasy"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Film Noir</label>
              <input
                name="genre"
                value="FilmNoir"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> History</label>
              <input
                name="genre"
                value="history"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Terror</label>
              <input
                name="genre"
                value="terror"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Musical</label>
              <input
                name="genre"
                value="musical"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Mistery</label>
              <input
                name="genre"
                value="mistery"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Romance</label>
              <input
                name="genre"
                value="romance"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Sci Fi</label>
              <input
                name="genre"
                value="scienceFiction"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Shorts</label>
              <input
                name="genre"
                value="shorts"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Sports</label>
              <input
                name="genre"
                value="sports"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Suspense</label>
              <input
                name="genre"
                value="suspense"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Warlike</label>
              <input
                name="genre"
                value="warlike"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
            <div>
              <label> Western</label>
              <input
                name="genre"
                value="west"
                onChange={handleGenre}
                type="checkbox"
              ></input>
            </div>
          </div>
          <div className="input-divs">
            <p className="not-ok">
              {movie.genre.length === 0 ? "Agregue al menos un género" : ""}
            </p>
          </div>
        </div>
      </div>
      {Object.values(movie).every((value) => value !== "" && value !== null) &&
      Object.values(error).every(
        (errorMsg) => errorMsg === "" && movie.genre.length > 0
      ) ? (
        <button className="ok-val" onClick={handleSubmit}>
          Upload Movie
        </button>
      ) : (
        <p className="not-ok">Complete all fields correctly</p>
      )}
    </div>
  );
};
export default PostMovie;
