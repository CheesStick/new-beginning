import { Icon } from '@iconify/react'
import { useRouter } from 'next/router';

const NavElement = ({ icon, text, to }: { icon: string, text: string, to: string }) => {
  const router = useRouter()
  return (
    <div onClick={() => {router.push(to)}}
      className='flex justify-start items-center text-white gap-x-2 cursor-pointer hover:bg-[#1C1E24] w-2/3 h-10 pl-4 rounded ease-in-out duration-300'>
        <Icon icon={icon} />
        { text }
    </div>
  );
}
 
export default NavElement;