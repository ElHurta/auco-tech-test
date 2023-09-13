import React from 'react'

import { Post } from '../interfaces/post-types'
import PostComponent from './PostComponent'

const getAllPosts = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return posts
}

export default async function postsList (): Promise<JSX.Element> {
  const posts = await getAllPosts()

  return (
    <section className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-md-cols-4 gap-2'>
      {
        posts.map((post: Post) => (
          <PostComponent
            key={post.id}
            post={post}
          />
        ))
      }
    </section>
  )
}
