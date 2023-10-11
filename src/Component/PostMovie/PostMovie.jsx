import { useEffect, useState, useRef } from "react";
import { postMovieValidation } from "../Validation/postMovieValidation";
import axios from "axios";
import "./PostMovie.css";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark/dark.css";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../Redux/actions/actions";

//http://localhost:3001/Nonflix/movies/genres

const PostMovie = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(getGenres());
  }, []);
  const genres = useSelector((state) => state.genres);

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
      setError({ ...error, torrent: "You must upload a torrent file" });
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

  
  const [activeButton, setActiveButton] = useState("image-button");

  // cloudinary upload widget
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

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
        <h1 className="h1">Add new movie to catalog</h1>
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
            <label>Duration (mins)</label>
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
            <p className="not-ok">{error.image}</p>

            <button className="uploadButton " onClick={handleImageUpload}>
              Upload Image
            </button>
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
            <p className="not-ok">{error.trailer}</p>

            <button className="uploadButton " onClick={handleTrailerUpload}>
              Upload Movie
            </button>
          </div>

          <div className="input-divs">
            <label>Torrent</label>
            <input name="torrent" onChange={handleFile} type="file"></input>
          </div>
          <div className="input-divs">
            <p className="not-ok">{error.torrent}</p>
          </div>
        </div>
        <div className="third-form-div">
          <div className="input-divs">
            <label>Language</label>
            <input
              className={error.language !== "" ? "wrong" : ""}
              name="language"
              value={movie.language}
              onChange={handleChange}
              type="text"
            ></input>
          </div>
          <div className="input-divs">
            <p className="not-ok">{error.language}</p>
          </div>
          <p className="generos-margin">Genres</p>
          <div className="checkbox-container">
            {genres.map((genre, index) => {
              return (
                <div>
                  
                  <input
                    key={index}
                    name="genre"
                    value={genre}
                    onChange={handleGenre}
                    type="checkbox"
                  />
                  <label>{genre}</label>
                </div>
              );
              
            })}
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
