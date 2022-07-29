import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getInverText } from '../redux/slices/iEcho/thunks'

export const Navbar = () => {
  const dispatch = useDispatch()
  // form handle
  const [inputSearch, setInputSearch] = useState('')
  const handleInputChange = ({ target }) => {
    setInputSearch(target.value)
  }
  // submit handle
  const handleSubmit = (e) => {
    e.preventDefault()
    // validations
    if (inputSearch.trim() === '') return // empty
    // start request
    dispatch(getInverText(inputSearch))
    // reset input
    setInputSearch('')
  }

  return (
    <nav className='navbar bg-danger  '>
      <div className='container-fluid d-flex justify-content-center'>
        <form onSubmit={handleSubmit} className='d-flex' role='search'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Insert Text'
            aria-label='Search'
            value={inputSearch}
            onChange={handleInputChange}
          />
          <button
            className='btn btn-primary'
            type='submit'
          >Send
          </button>
        </form>
      </div>
    </nav>
  )
}
