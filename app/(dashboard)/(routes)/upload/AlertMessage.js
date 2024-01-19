import React from 'react'

const AlertMessage = ({msg}) => {
  return (
    <div className='p-4 bg-red-500 mt-5 text-white rounded-md flex gap-5 items-center'>
        {msg}
    </div>
  )
}

export default AlertMessage