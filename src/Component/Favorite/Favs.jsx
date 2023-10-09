
import Filters from "../Filters/Filters";
import ListCards from "../ListCards/ListCards";
import SearchBar from "../SearchBar/SearchBar";
import SideBar from "../SideBar/SideBar";
import Favorites from "./Favorites";
import style from "./Favorites.module.css";

const Favs = () => {
  return (
    <div className={style.home}>
      <SideBar />
      <div className={style.center}>
        <Favorites />
      </div>
    </div>
  );
};

export default Favs;