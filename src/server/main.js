const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io')
const { PrismaClient } = require('@prisma/client')

const app = express()
const server = createServer(app)
const prisma = new PrismaClient()
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }
})

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    io.to('1').emit('receive_message', data)
  });

  socket.on('like_post', async (data) => {
    const { userId, postId } = data
    
    const like = await prisma.like.findFirstOrThrow({ where: { userId, postId } })

    if ( like ) {
      console.log('working on it')
      prisma.like.delete({ where: { userId, postId } })
      socket.emit('disliked_post', true)
    }
    else {
      prisma.like.create({ data: { userId, postId }})
      socket.emit('liked_post', true)
    }
  })
});

server.listen(3001, () => {
  console.log('SocketIo Server is listening on 3001')
});