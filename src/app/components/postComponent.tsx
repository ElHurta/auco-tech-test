import React from 'react'
import { Post } from '../interfaces/post-types'

export default function PostComponent ({ post } : { post: Post}) {
  const { title, body } = post
  const cuttedTitle = `${title.slice(0, 50)}...`
  const cuttedBody = `${body.slice(0, 80)}...`

  return (
    <article>
      <header className='h-1/2'>
        <h2 className='text-lg font-semibold text-sky-700'>{cuttedTitle}</h2>
      </header>
      <main className='h-1/2'>
        <p className='text-base text-ellipsis overflow-hidden'>{cuttedBody}</p>
      </main>
    </article>
  )
}
