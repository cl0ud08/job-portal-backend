const app = require('./app');
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*', // Allow any frontend to connect
    methods: ['GET', 'POST']
  }
});

require('./sockets/chat')(io); // 👈 this should be implemented

server.listen(process.env.PORT || 5000, () => {
  console.log('✅ Server running on port 5000');
});
