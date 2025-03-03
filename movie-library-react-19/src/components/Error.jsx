import React from 'react'

const Error = ({ errorMessage }) => {
  return (
    <p className='text-red-500'>
      { errorMessage }
    </p>
  )
}

export default Error
