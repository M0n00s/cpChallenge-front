import React from 'react'
import { ListItem } from './ListItem'
import { useSelector } from 'react-redux'
import { Spinner } from './Spinner'

export const Home = () => {
  const { inverText, isLoading } = useSelector(state => state.inverText)

  return (
    <div className='container mt-5'>
      <h2>Results:</h2>
      <hr />
      {
        isLoading && <Spinner />
      }
      <div className='row d-flex justify-content-center'>
        <div className='col-8'>
          <ListItem itext={inverText} />
        </div>

      </div>
    </div>
  )
}
