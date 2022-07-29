import React from 'react'

export const ListItem = ({ itext = [] }) => {
  return (
    <ul className='list-group'>
      {
            itext.map((inverText) => (
              <li key={inverText.text} className='list-group-item d-flex justify-content-between'>
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
