import ListCards from "../ListCards/ListCards";
import SideBar from "../SideBar/SideBar";
import style from "./Home.module.css";

const Home = () => {
    return(
        <div className={style.home}>
            <SideBar />
            <ListCards />
        </div>
    )
}

export default Home;