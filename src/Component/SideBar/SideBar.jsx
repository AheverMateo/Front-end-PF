import { Link } from "react-router-dom";
import logo from "../../assets/NONFLIX-LOGO.png";
import style from "./SideBar.module.css";
import homeIcon from "../../assets/round_home_white_24dp.png";
import profileIcon from "../../assets/round_person_outline_white_24dp.png";
import logOutIcon from "../../assets/round_logout_white_24dp.png";
import favoriteIcon from "../../assets/round_favorite_border_white_24dp.png";
import shoppingCartIcon from "../../assets/round_shopping_cart_white_24dp.png"

const SideBar = () => {
  return (
    <div className={style.main}>
      <div className={style.logo}>
        <img className="sidebar_image" src={logo} />
      </div>
      <div className={style.menu}>
        <h3>Menu</h3>
        <Link to="/">
          <img src={homeIcon} />
          <div>Home</div>
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
        <Link to=""><div>Action</div></Link>
        <Link to=""><div>Adventure</div></Link>
        <Link to=""> <div>Biography</div></Link>
        <Link to=""><div>Comedy</div></Link>
        <Link to=""><div>Crime</div></Link>
        <Link to=""><div>Documentary</div></Link>
        <Link to=""><div>Drama</div></Link>
        <Link to=""><div>Family</div></Link>
        <Link to=""><div>Fantasy</div></Link>
        <Link to=""><div>Horror</div></Link>
        <Link to=""><div>Mistery</div></Link>
        <Link to=""><div>Romance</div></Link>
        <Link to=""><div>Sci-Fi</div></Link>
        <Link to=""> <div>Sport</div></Link>
        <Link to=""><div>Thriller</div></Link>
        <h3>General</h3>
        <Link to="">
          <img src={profileIcon} />
          <div>Perfil</div>
        </Link>
        <Link to="">
          <img src={logOutIcon} />
          <div>Logout</div>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
