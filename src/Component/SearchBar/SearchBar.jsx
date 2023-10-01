import React, { useEffect } from 'react';
import { useState } from 'react';
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
    dispatch(getByName(name))//despachar una action q modifique el display con la respuesta de un get por nombre
  };


  return (
    <div className='search_div'>
      <label name="search">Búsqueda
        <input className="search_input" name='search' value={inputSearch} 
        onChange={handleInput} placeholder='Nombre de la película'></input>
      </label>
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
};
export default SearchBar;