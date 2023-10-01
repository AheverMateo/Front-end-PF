import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { getByName } from '../../Redux/actions/actions';

const SearchBar = () => {

  const [inputSearch, setInputSearch] = useState("");
  const dispatch = useDispatch();
  

  const handleInput = (e) =>{
    setInputSearch(e.target.value);
  };

  const handleSearch= (e) => {
    e.preventDefault()
    dispatch(getByName(inputSearch))
  };


  return (
    <div className='search_div'>
      <label name="search">Búsqueda
        <input className="search_input" name='search' value={inputSearch} 
        onChange={handleInput} placeholder='Nombre de la película'/>
      </label>
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
};
export default SearchBar;