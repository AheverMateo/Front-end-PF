import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./FormPutMovie.module.css";
import { putMovie } from "../../Redux/actions/actions";

const Form = () => {
    const { id } = useParams();
    
    const allMovies = useSelector((state) => state.Allmovies);
    

    const movieId = allMovies.find((movie)=> movie.id === id)
   
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({
        title: "",
        duration: "",
        trailer: "",
        description: "",
        image: "",
        year: "",
        language: "",
        torrent: ""
       
    });

    const [input, setInput] = useState({
        title: movieId.title,
        duration: movieId.duration,
        trailer: movieId.trailer,
        description: movieId.description,
        image: movieId.image,
        year: movieId.year,
        language: movieId.language,
        torrent: movieId.torrent
        
    });

 const handleChange = (event) => {
    const { name, value } = event.target;
    // if(name === "duration"){const minutes = value.split(":")
    // let total = (minutes[0]*60) + parseInt(minutes[1])
    // setInput((prevInput) => ({
    //     ...prevInput,
    //     [name]: total,
    // }))} else {

    setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
    }));
   
 }

 

 const handleSubmit = async (event) => {
    event.preventDefault();
   
    dispatch(putMovie(input, id))  
    


 }
    
  
    return (
        <div>
            <div className={style.globalContainer}>        
        <h1 className={style.h1}>Modify the movie</h1>
        </div>
            
{/* <p>{JSON.stringify(input)}</p> */}
<div className={style.firstContainer}>
<div className={style.firstFormDiv}>
            <form onSubmit={handleSubmit}>
                <div className={style.firstContainer}>
                <label htmlFor="title">Title</label>
                <input name="title" onChange={handleChange} value={input.title} />
                </div>
                

                <div className={style.firstContainer}>
                    <label htmlFor="duration">Duration</label>
                    <input type="text" name='duration' onChange={handleChange} value={input.duration}/>
                </div>

                <div className={style.firstContainer}>
                    <label htmlFor="trailer">Trailer</label>
                    <input type="text" name='trailer' onChange={handleChange} value={input.trailer}/>
                </div>
                <div className={style.firstContainer}>
                    <label htmlFor="description">Description</label>
                    <input type="text" name='description' onChange={handleChange} value={input.description}/>
                </div>
                <div className={style.firstContainer}>
                    <label htmlFor="image">Image</label>
                    <input type="text" name='image' onChange={handleChange} value={input.image}/>
                </div>
                <div className={style.firstContainer}>
                    <label htmlFor="year">Year</label>
                    <input type="number" name='year' onChange={handleChange} value={input.year}/>
                </div>
                <div className={style.firstContainer}>
                    <label htmlFor="language">Language</label>
                    <select name="language" onChange={handleChange} >
                    <option value="lang">Language</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    </select>
                </div>
                

                <button className={style.okVal} type='submit'>Modify</button>
                <div>
                <Link to='/dashboard'>
                    <button className={style.okVal}>Back</button> 
                </Link>

                </div>
            </form>
            </div>
            </div>
        </div>
    )
};

export default Form;