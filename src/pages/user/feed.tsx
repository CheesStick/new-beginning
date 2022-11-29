import { Icon } from "@iconify/react";
import { useState} from 'react'
import { motion } from 'framer-motion'

import { trpc } from '../../utils/trpc'
import { AuthLayout, Post } from '../../components';

const Feed = () => {
  const [ post, setPost ] = useState()
  const mutation = trpc.post.createPost.useMutation()

  const posts = trpc.post.getPosts.useQuery()

  return (
    <div className={`col-span-9 flex flex-col gap-y-10  ${ posts.isSuccess ? 'h-full' : 'h-screen' } `}>
      <div className='bg-[#1C1E24] w-1/2 h-44 rounded text-white relative'>
          <textarea onChange={(e) => setPost(e.target.value)}
            className="p-2 bg-transparent resize-none w-full h-full text-sm"
            placeholder="what's on your mind"
          />

          <button
            onClick={ () => {
              mutation.mutate({ content: post })
              setPost('')
            } } 
            className="flex-center gap-x-2 w-1/3 h-10 m-2 bg-blue-600 rounded absolute right-0 bottom-0 text-sm">
            <Icon icon="dashicons:plus-alt2" width={19} height={19} />
            Create Post
          </button>
      </div>

      <div className="flex flex-col gap-y-10 my-5">
        { posts.data && posts.data.map((post) => (<Post key={post.id} post={post} />) ) }
      </div>
    </div>
  )
}

Feed.getLayout = (feed) => {
  return (
    <AuthLayout sidebar={false}>
      { feed }
    </AuthLayout>
  )
}

export default Feed;