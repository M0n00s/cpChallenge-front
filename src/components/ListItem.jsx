import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteInverText } from '../redux/slices/iEcho/iEchoSlice'
import './css/ListItem.css'

export const ListItem = ({ itext = [] }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch( deleteInverText(id)) 
  }
  return (
    <ul className='list-group'>
      {
            itext.map((inverText) => (
              <li 
              onClick={ () => handleDelete(inverText.id) } 
              key={inverText.id} 
              className='list-group-item d-flex justify-content-between listItem__item'              
              
              >
                <span className='align-self-center'>{inverText.text}</span>
                {
                  inverText.palindrome && <span className='badge text-bg-success'>¡is Palindrome!</span>
                }
              </li>
            ))
        }
    </ul>
  )
}
