import ListCards from "../ListCards/ListCards";
import SearchBar from "../SearchBar/SearchBar";
import SideBar from "../SideBar/SideBar";
import style from "./Home.module.css";

const Home = () => {
    return(
        <div className={style.home}>
            <SideBar />
            <ListCards />
            <SearchBar/>
        </div>
    )
}

export default Home;