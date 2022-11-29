import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";

import Image from "next/image";
import { useRef } from "react";

const TopBar = () => {
  const { data: session } = useSession()
  const ref = useRef(null)

  return (
    <div className='w-full flex justify-between items-center px-5 h-20 top-bar mb-5'>
      <div className='flex justify-between items-center rounded bg-[#1C1E24] h-3/6 pl-2 w-1/4 text-white'
      onClick={ () => { ref.current.focus() } }>
        <Icon icon="akar-icons:search" width="20" height="20" />
        
        <input
          type="text" 
          className='bg-transparent h-full w-full pl-2 text-sm'
          ref={ref}
        />
      </div>

      <div className='flex-center gap-x-3'>
        <Image src={ session?.user?.image } width='35' height='35' className='rounded-full' />
        <Icon icon="carbon:notification" width="20" height="20" color="white" />
      </div>
    </div>
  );
}
 
export default TopBar;