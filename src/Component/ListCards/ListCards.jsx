import React from 'react'
import { useSelector} from 'react-redux'
import { useState } from 'react';
import Card from '../Card/Card';

const ListCards = () => {
    const movies = useSelector((state) => state.Allmovies) 
    console.log(movies);
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
        <div>
            {MovieRender.map(props => {
                return (
                  <Card
                  key = {props.id}
                  id = {props.id}
                  title = {props.title}
                  duration = {props.duration}
                  image = {props.image}
                  year = {props.year}
                  lenguage = {props.lenguage}
                  torrent = {props.torrent}
                  />
                )
            })}
        </div>
        <div>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
        <span>Page {currentPage}</span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === maxPage}>Siguiente</button>
        </div>
    </div>
  )
}

export default ListCards