import React from 'react'
import { Post, User } from '../interfaces/post-types'
import Link from 'next/link'

const getPostAuthor = async (id: number): Promise<User> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const author = await res.json()

  return author
}

export default async function PostComponent ({ post } : { post: Post}) {
  const postAuthor = await getPostAuthor(post.userId)

  const { title, body } = post

  const cuttedTitle = title.length > 30 ? title.slice(0, 30) + '...' : title
  const cuttedBody = body.length > 60 ? body.slice(0, 60) + '...' : body

  return (
    <article className='p-2 bg-gray-200 hover:bg-slate-300 transition: background'>
      <header className='h-1/3 my-2'>
        <Link
          className='text-lg font-semibold text-sky-700'
          href={`/posts/${post.id}`}
        >
          {cuttedTitle}
        </Link>
      </header>
      <main>
        <p className='text-ellipsis text-sm overflow-hidden'>{cuttedBody}</p>
        <small>{postAuthor.name}</small>
      </main>
    </article>
  )
}
