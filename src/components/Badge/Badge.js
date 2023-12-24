import React from 'react'

const Badge = ({Icon,label}) => {
  return (
    <div className='inline-flex border-solid border-2 hover:border-dotted rounded-full p-1 px-2 items-center gap-1.5 m-1'>
        <Icon/>
        {label}
    </div>
  )
}

export default Badge