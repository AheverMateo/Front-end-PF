import { Link } from "react-router-dom";
import logo from "../../assets/NONFLIX-LOGO.png";
import style from "./SideBar.module.css";
import homeIcon from "../../assets/round_home_white_24dp.png";
import profileIcon from "../../assets/round_person_outline_white_24dp.png";
import logOutIcon from "../../assets/round_logout_white_24dp.png";
import favoriteIcon from "../../assets/round_favorite_border_white_24dp.png";
import shoppingCartIcon from "../../assets/round_shopping_cart_white_24dp.png";
import { useDispatch, useSelector } from "react-redux";
import { filterParameters, setCurrentPage, clearUserData } from "../../Redux/actions/actions";
import { useState } from "react";

const SideBar = () => {
  const dispatch = useDispatch();
  const stateFilterParams = useSelector((state) => state.filterParameters);

  const [selectedGenre, setSelectedGenre] = useState("Home");

  const handleCategoryClick = (event) => {
    const copyFilterParameters = stateFilterParams;
    copyFilterParameters[0] = event.target.id;
    setSelectedGenre(event.target.id);
    copyFilterParameters[3] = null;
    dispatch(setCurrentPage(1));
    dispatch(filterParameters(copyFilterParameters));
    
  };

  const handleHomeClick = () => {
    const copyFilterParameters = stateFilterParams;
    copyFilterParameters[0] = "Home";
    copyFilterParameters[3] = null;
    dispatch(filterParameters(copyFilterParameters));
    dispatch(setCurrentPage(1));
    setSelectedGenre('Home');
  };
  const handleLogOut = () => {
    dispatch(clearUserData());
  }
  const genres = [
    "Action",
    "Adventure",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Horror",
    "Mistery",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Thriller",
  ];
  return (
    <div className={style.main}>
      <div className={style.logo}>
        <img className="sidebar_image" src={logo} />
      </div>
      <div className={style.menu}>
        <h3>Menu</h3>
        <Link to="/Home" id="Home" >
          <img src={homeIcon} />
          <div onClick={() => handleHomeClick()} className={selectedGenre ==="Home" ? style.selected : style.none}>Home</div>
        </Link>
        <Link>
          <img src={favoriteIcon} />
          <div>Favorites</div>
        </Link>
        <Link to="/Cart">
          <img src={shoppingCartIcon} />
          <div>Cart</div>
        </Link>

        <h3>Genre</h3>
       
          {genres.map((genre, index) => (
            <Link to="/Home" key={index}>
              <div
              className={selectedGenre === genre ? style.selected : style.none}
                key={index}
                onClick={(event) => handleCategoryClick(event)}
                id={genre}
              >
                {genre}
              </div>
            </Link>
          ))}
        
        <h3>General</h3>
        <Link>
          <img src={profileIcon} />
          <div>Perfil</div>
        </Link>
        <Link to="/">
          <img src={logOutIcon} />
          <div onClick={()=>handleLogOut()}>Logout</div>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
