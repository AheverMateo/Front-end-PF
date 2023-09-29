import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchBar = () => {

  const [inputSearch, setInputSearch] = useState("");
  const dispatch = useDispatch();


  const handleInput = (e) =>{
    setInputSearch(e.target.value);
  };

  const handleSearch= () => {
    dispatch()//despachar una action q modifique el display con la respuesta de un get por nombre
  };

  useEffect(() => {
    dispatch()//despachar una action q haga un filter de las movies en display, para devolver las q incluyen
    // en la propiedad "name", el string q esta en inputSearch. Si manda un string vacío mostrar todas.
  }, [inputSearch]);

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