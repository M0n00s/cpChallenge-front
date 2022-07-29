import React from 'react'

export const Spinner = () => {
  return (
    <div className='d-flex justify-content-center'>
      <button className='btn btn-primary' type='button' disabled>
        <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true' />
        Loading...
      </button>
    </div>
  )
}
