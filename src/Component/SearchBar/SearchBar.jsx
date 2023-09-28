import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
const SearchBar = () => {

  const [inputSearch, setInputSearch] = useState("")
  const dispatch = useDispatch()


  const handlerName = (e) =>{
    setInputSearch(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    dispatch()
  }

  return (
    <div>SearchBar</div>
  )
}

export default SearchBar