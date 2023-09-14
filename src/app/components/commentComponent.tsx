import React from 'react'
import { Comment } from '../interfaces/post-types'

export default function CommentComponent({comment}: {comment : Comment}) {
  return (
    <li className='my-4' key={comment.id}>
        <h4 className='font-semibold'>From: {comment.name}</h4>
        <p className='text-base'>{comment.body}</p>
    </li>
  )
}
