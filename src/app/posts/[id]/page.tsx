import CommentComponent from '@/app/components/commentComponent'
import { Param, Post, Comment } from '@/app/interfaces/post-types'
import Link from 'next/link'

import React from 'react'


const getSinglePostById = async (id: number): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()

  return post
}

const getCommentsFromPost = async (id: number): Promise<Comment[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  const comments = await res.json()

  return comments
}

export default async function PostPage ({params} : {params: Param}): Promise<JSX.Element> {
  
  const { id } = params
  const post = await getSinglePostById(id)
  const comments = await getCommentsFromPost(id)

  return (
    <>
      <article>
        <Link href={'/'}>{'< Volver '}</Link>
        <h2 className='text-3xl sm:text-4x md:text-4xl font-bold'>{post.title}</h2>
        <p className='m-4 sm:m-6 md:m-8 text-base'>{post.body}</p>
      </article>
      <article>
        <h3 className='m-2 text-2xl font-bold'>Comments: </h3>
        <hr className='border-2' />
        <ul className='p-4 sm:p-5 md:p-6'>
          {
            comments.map((comment: Comment) => (
              <CommentComponent
                key={comment.id}
                comment={comment}
              />
            ))
          }
        </ul>
      </article>
    </>
  )
}
