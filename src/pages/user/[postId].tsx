import Image from 'next/image'
import Link from 'next/link'

import { Socket, io } from 'socket.io-client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { AuthLayout } from '../../components'
import { trpc } from '../../utils/trpc'

let socket: Socket

const PostDetails = () => {
  const { data: session }  = useSession()
  const router = useRouter()
  const [ like, setLike ] = useState()
  
  const { postId } = router.query
  const { data: post } = trpc.post.getPost.useQuery({ postId })
  const [ likes, setLikes ] = useState<number>()

  useEffect(() => {
    setLike(post?.likes.filter( item => item.userId === session?.user?.id ))
    setLikes(post.likes.length)
    
    socket = io('http://localhost:3001')
    socket.on('disliked_post', (data) => {
      setLikes( likes-1)
    })

    socket.on('liked_post', (data) => {
      setLikes(likes + 1)
    })

    return () => { socket.disconnect() }

  }, [])

  return (
    <>
      { post && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} 
          className='col-span-9 flex flex-col h-screen gap-y-5'> 
          <div className='w-5'>
            <Link href='/user/feed'>
              <Icon icon='material-symbols:arrow-back' color='white' width={25} height={25} />
            </Link>
          </div>
          <div className='w-full flex h-11 gap-x-3'>
            <Image src={post.user.image} width={45} height={40} alt='user_image' className="rounded-full" />

            <div className='flex flex-col'>
              <p className='text-gray-600'> @{ post.user.name } </p>
              <p className='text-white'> { post.user.name } </p>
            </div>
          </div>

          <p className='w-1/2 text-white'> { post.content } </p>

          <ul 
            className='flex text-white gap-x-5'>
            <li onClick={ () => {
              console.log('emited')
              socket.emit('like_post', { userId: session?.user?.id, postId })
            } }
              className='flex-center gap-x-1 cursor-pointer'>
              <Icon icon="ant-design:heart-outlined" color={ like?.userId === session?.user?.id ? 'red' : null } />
              { likes }
            </li>

            <li className='flex-center gap-x-1'>
              <Icon icon="akar-icons:comment" />
              { post.comments.length }
            </li>

            <li className='flex-center gap-x-1'>
              <Icon icon="charm:share" />
              { post.shares }
            </li>
          </ul>
        </motion.div>
      ) }
    </>
  );
}

PostDetails.getLayout = (postDetails) => {
  return (
    <AuthLayout sidebar={false}>
      { postDetails }
    </AuthLayout>
  )
}
 
export default PostDetails;