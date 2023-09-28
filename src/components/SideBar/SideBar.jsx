import { Link } from "react-router-dom";

const SideBar = () => {
    return(
        <div className="sidebar_container">
            <div><img src=""></img></div>
            <Link to="/"><div>Home</div></Link>
            <Link><div>Categorías</div></Link>
            <Link><div>Perfil</div></Link>
            <Link><div>Logout</div></Link>
        </div>
    )
};
export default SideBar;