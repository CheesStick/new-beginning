import Image from 'next/image'

import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react'

const Post = ({ post }) => {
  const router = useRouter()

  return (
    <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} onClick={() => router.push(`/user/${ post.id }`) }
      className='flex flex-col text-sm gap-y-5 hover:bg-[#1a535c2f] w-1/2 rounded p-4 cursor-pointer ease-in-out duration-300'>
      <div className='w-full flex h-11 gap-x-3'>
        <Image src={post.user.image} width={45} height={40} alt='user_image' className="rounded-full" />

        <div className='flex flex-col'>
          <p className='text-gray-600'> @{ post.user.name } </p>
          <p className='text-white'> { post.user.name } </p>
        </div>
      </div>

      <p className='w-1/2 text-white'> { post.content } </p>

      <ul className='flex text-white gap-x-5'>
        <li className='flex-center gap-x-1'>
          <Icon icon="ant-design:heart-outlined" />
          { post.likes && post.likes.length }
        </li>

        <li className='flex-center gap-x-1'>
          <Icon icon="akar-icons:comment" />
          { post.comments && post.comments.length }
        </li>

        <li 
          className='flex-center gap-x-1'>
          <Icon icon="charm:share" />
          { post.shares }
        </li>
      </ul>
    </motion.div>
  );
}
 
export default Post;