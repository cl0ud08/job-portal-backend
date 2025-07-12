module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('📡 User connected:', socket.id);
  
      socket.on('job_applied', (data) => {
        console.log('📨 Job applied:', data);
        io.emit('notify_employer', data); // broadcast to all connected clients
      });
  
      socket.on('disconnect', () => {
        console.log('❌ User disconnected:', socket.id);
      });
    });
  };
  