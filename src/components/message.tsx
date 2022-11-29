import Image from 'next/image'

type TMessage = {
  message: string,
  user: {
    name: string,
    image: string
  }
}

const Message = ({ msg, name }: { msg: TMessage, name: string }) => {
  
  if ( name === msg.user.name ) {
    return (
      <div className='w-full flex justify-end items-center gap-x-3 my-5'>
        <p className="bg-[#0E1016] text-white px-2 rounded h-8 flex-center" >
          { msg.message }
        </p>

        <Image src={msg.user.image} width={30} height={30} alt='usr_photo' className='rounded-full mr-5' />
      </div>
    )
  } else {
    return (
      <div className='w-full flex justify-start items-center gap-x-3 my-3'>
        <Image src={msg.user.image} width={30} height={30} alt='usr_photo' className='rounded-full' />

        <p className="bg-[#0E1016] text-white px-2 rounded h-8 flex-center" >
          { msg.message }
        </p>
      </div>
    );
  }
  
}
 
export default Message;