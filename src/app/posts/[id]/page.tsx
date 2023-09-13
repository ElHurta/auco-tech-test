import React from 'react'

export default function PostPage ({params}): JSX.Element {
  console.log(params)
  const { id } = params

  return (
    <>
      <h2 className='text-3xl sm:text-4x md:text-4xl font-bold'>Post {id}</h2>
      
    </>
  )
}
