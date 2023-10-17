import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import style from './NotFound.module.css';
import BackButton from "../BackButton/BackButton";
import icon from "../../assets/NONFLIX-LOGO.png";

const NotFound = () => {

    // Para implementar la página NotFound agregar lo siguiente como una Route en App.jsx:
    // <Route path="*" element={<NotFound/>}/>
    // Cualquier ruta no especificada renderizará NotFound

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/home")//puse "/" como la ruta de home, cambiarlo si no es así
    };

    return(
        <div className={style.main}>
        <SideBar />
        <div className={style.notFound}>
            <img src={icon}></img>
            <h1>Oops! Page not found</h1><br></br>
            <h2>404 Error</h2><br></br>
            <div className="div-buttons">
                <BackButton></BackButton>
                <h> </h>
                <button onClick={goHome}>Go Home</button>
            </div>
        </div>
        </div>
    )
};
export default NotFound;