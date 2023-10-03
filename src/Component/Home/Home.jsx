import ListCards from "../ListCards/ListCards";
import SearchBar from "../SearchBar/SearchBar";

import style from "./Home.module.css";

const Home = () => {
    return(
        <div className={style.home}>
            <ListCards />
            <SearchBar/>
        </div>
    )
}

export default Home;