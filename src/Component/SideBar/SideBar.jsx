import { Link } from "react-router-dom";
import logo from "../../assets/NONFLIX-LOGO.png";
import style from "./SideBar.module.css";
import homeIcon from "../../assets/round_home_white_24dp.png";
import profileIcon from "../../assets/round_person_outline_white_24dp.png";
import logOutIcon from "../../assets/round_logout_white_24dp.png";
import favoriteIcon from "../../assets/round_favorite_border_white_24dp.png";
import shoppingCartIcon from "../../assets/round_shopping_cart_white_24dp.png";
import { useDispatch } from "react-redux";
import {
  clearFilter,
  getMoviesByGenre,
  setCurrentPage,
} from "../../Redux/actions/actions";

const SideBar = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (event) => {
    dispatch(setCurrentPage(1));
    dispatch(getMoviesByGenre(event.target.id));
  };

  const handleHomeClick = () => {
    dispatch(clearFilter());
  };
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
        <Link to="/Home">
          <img src={homeIcon} />
          <div onClick={() => handleHomeClick()}>Home</div>
        </Link>
        <Link to="">
          <img src={favoriteIcon} />
          <div>Favorites</div>
        </Link>
        <Link to="">
          <img src={shoppingCartIcon} />
          <div>Cart</div>
        </Link>

        <h3>Genre</h3>
        {genres.map((genre, index) => (
          <Link to="/Home">
            <div
              key={index}
              onClick={(event) => handleCategoryClick(event)}
              id={genre}
            >
              {genre}
            </div>
          </Link>
        ))}

        <h3>General</h3>
        <Link to="">
          <img src={profileIcon} />
          <div>Perfil</div>
        </Link>
        <Link to="/">
          <img src={logOutIcon} />
          <div>Logout</div>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
