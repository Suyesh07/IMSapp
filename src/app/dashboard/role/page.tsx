import React from 'react'

const Role = () => {
  return (
    <>
      <h1>role form page</h1>
      <form className='flex justify-between'>
        <input type="text" className='border border-black rounded-lg w-3/4 h-10 pl-4' placeholder='Enter role' />
        <button className='border rounded-lg w-24 h-10 bg-lime-300'>+ Create</button>
      </form>
    </>
  )
}

export default Role
