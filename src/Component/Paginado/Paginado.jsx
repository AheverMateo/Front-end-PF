import React from 'react'
import { useState } from 'react'
//import { useSelector } from 'react-redux'
const Paginado = () => {   
    const movies = [{

    }] 
    //const movies = useSelector((state)=> state.Movies)
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 6
    const maxPage = Math.ceil(movies.length / pageSize) 
    const startIdx = currentPage * pageSize;
    const endIdx = startIdx + pageSize;
    const MovieRender = movies.slice(startIdx, endIdx);

    const goToPage = (page) => {
        if (page >= 1 && page <= maxPage) {
          setCurrentPage(page);
        }
      };

  return (
    <div>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
        <span>Page {currentPage}</span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === maxPage}>Siguiente</button>
    </div>
  )
}

export default Paginado