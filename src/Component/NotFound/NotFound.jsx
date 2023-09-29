import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import style from './NotFound.module.css';

const NotFound = () => {

    // Para implementar la página NotFound agregar lo siguiente como una Route en App.jsx:
    // <Route path="*" element={<NotFound/>} />
    // Cualquier ruta no especificada renderizará NotFound

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/")//puse "/" como la ruta de home, cambiarlo si no es así
    };

    return(
        <div className={style.main}>
        <SideBar />
        <div className="notfound_container">
            <h1>Oops! Página no encontrada</h1>
            <h2>404</h2>
            <h2>No podemos encontrar la página que buscaste</h2>
            <button onClick={goHome}>Volver a Home</button>
        </div>
        </div>
    )
};
export default NotFound;