import React from 'react'
import { Post } from '../interfaces/post-types'
import Link from 'next/link'

export default function PostComponent ({ post } : { post: Post}) {
  const { title, body } = post

  const cuttedTitle = title.length > 50 ? title.slice(0, 35) + '...' : title
  const cuttedBody = body.length > 100 ? body.slice(0, 80) + '...' : body

  return (
    <article>
      <header className='h-1/3 my-2'>
        <Link
          className='text-lg font-semibold text-sky-700'
          href={`/posts/${post.id}`}
        >
          {cuttedTitle}
        </Link>
      </header>
      <main className='h-2/3'>
        <p className='text-base text-ellipsis overflow-hidden'>{cuttedBody}</p>
      </main>
    </article>
  )
}
