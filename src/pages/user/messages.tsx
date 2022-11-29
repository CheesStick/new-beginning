import { useState, useEffect, useRef } from "react";
import { io, Socket } from 'socket.io-client'
import rs from 'randomstring'
import { useSession } from "next-auth/react";
import { AuthLayout, Message } from "../../components";

let socket: Socket

const Messages = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { data: session } = useSession()
  
  useEffect(() => {
    socket = io('http://localhost:3001')

    socket.emit('join_room', '1')

    socket.on('receive_message', (data) => {
      setMessages((m) => {
        return [ ...m, data ]
      })
    })

    return () => { socket.disconnect() }
  }, [])

  return (
    <>
      <div className='w-full h-screen col-span-9 flex-center'>
        <div className='bg-[#1C1E24] w-10/12 h-[93%] rounded grid grid-rows-1 grid-cols-8 p-5'>
          <div className='col-span-2 row-span-1 bg-[#0E1016] rounded'>
            
          </div>

          <div className='p-5 w-full row-span-1 col-span-6 flex flex-col jusitfy-around gap-y-5'>
            <div className='h-[90%] overflow-y-auto messages'>
              { messages && messages.map((msg) => {
                return <Message key={rs.generate()} msg={msg} name={session?.user?.name} />
              }) }
            </div>


            <div className='bg-[#0E1016] h-[10%] rounded text-sm text-white'>
              <input placeholder='type a message' type="text" 
                onChange={ (e) => setMessage(e.target.value) }
                value={message} 
                className='h-full w-11/12 pl-3 bg-transparent rounded' />

              <button onClick={ () => {
                if ( message && message.trim() ) {
                  socket.emit('send_message', {
                    message,
                    user: {
                      name: session?.user?.name,
                      image: session?.user?.image
                    }
                  })
  
                  setMessage('')
                } else {
                  return
                }
              } } className='w-1/12 h-full text-center' > send </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Messages.getLayout = (messages) => {
  return (
    <AuthLayout sidebar={false}>
      { messages }
    </AuthLayout>
  )
}
 
export default Messages;