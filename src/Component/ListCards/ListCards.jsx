import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from '../../Redux/actions/actions';
import style from "./ListCards.module.css";

const ListCards = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
    const movies = useSelector((state) => state.Allmovies) 
    
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12;
    const maxPage = Math.ceil(movies.length / pageSize) 
    const startIdx = currentPage * pageSize;
    const endIdx = startIdx + pageSize;
    const MovieRender = movies.slice(startIdx, endIdx);
    console.log(MovieRender);

    const goToPage = (page) => {
        if (page >= 1 && page <= maxPage) {
          setCurrentPage(page);
        }
      };
      
      
  return (
    <div>
        <div className={style.cards}>
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