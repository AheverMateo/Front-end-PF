import Filters from "../Filters/Filters";
import ListCards from "../ListCards/ListCards";
import SideBar from "../SideBar/SideBar";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <SideBar />
      <div className={style.center}>
        <Filters />
        <ListCards />
      </div>
    </div>
  );
};

export default Home;
