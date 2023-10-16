import style from "./ShoppingHistory.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPurchasedMovies } from "../../Redux/actions/actions";
import shoppingHistoryIcon from "../../assets/baseline_history_white_24dp.png"
const ShoppingHistory = () => {
  const shoppingHistory = useSelector((state) => state.shoppingHistory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPurchasedMovies());
  }, []);
  let repeatedDate = false;
  let date = "";
  
  return (
    <div className={style.divMain}>
        <div className={style.title}>
            <img src={shoppingHistoryIcon} alt="shopping" /> 
            <h2>Shopping History</h2>
        </div>
      {
        
      
        shoppingHistory?.map((buys) => {
            if(buys?.message) {
                return  <div key={buys.message}>
                    <p>{buys.message}</p>
                </div>
            }
          let dateSplit = buys?.createdAt?.split("T");
          if (dateSplit && dateSplit[0] !== date) {
            repeatedDate = false;
            date = dateSplit[0];
          } else {
            repeatedDate = true;
          }
          return (
            <div key={buys.id}>
              {!repeatedDate && <p>{date}</p>}
              <div className={style.shopMovie}>
                {buys?.Movies?.map((movie) => {
                  return (
                    <div key={movie.id} className={style.movies}>
                      <img src={movie.image} alt="movie" />
                      <h4>{movie.title}</h4>
                      <p>$ 5.00 USD</p>
                    </div>
                  );
                })}
                <h4>Total: {buys.total}</h4>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default ShoppingHistory;
