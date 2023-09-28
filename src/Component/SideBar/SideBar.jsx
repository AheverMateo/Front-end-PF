import { Link } from "react-router-dom";
import logo from '../../assets/NONFLIX-LOGO.png';
const SideBar = () => {
    return(
        <div className="sidebar_container">
            <div><img className="sidebar_image" src={logo}></img></div>
            <Link to="/"><div>Home</div></Link>
            <Link to=""><div>Categorías</div></Link>
            <Link to=""><div>Perfil</div></Link>
            <Link to=""><div>Logout</div></Link>
        </div>
    )
};
export default SideBar;