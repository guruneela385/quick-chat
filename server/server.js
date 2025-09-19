// // import "dotenv/config.js";
// import dotenv from 'dotenv';
// dotenv.config();
// import express from "express";

// import cors from "cors";
// import http from "http";
// import { connectDB } from "./libs/db.js";
// import { Server } from "socket.io";
// import { userRouter } from "./routes/userRoutes.js";
// import { messageRouter } from "./routes/messageRoutes.js";
// import { groupRouter } from "./routes/groupRoutes.js";
// import { Group } from "./models/Group.js";

// //create express app  and HTTP server
// const app = express();
// const server = http.createServer(app);

// // Initialize socket.io server
// export const io = new Server(server, {
//   cors: { origin: "*" },
// });

// //Store online users
// export const userSocketMap = {}; //{userId,socketId}

// //socket io connectino Handler
// io.on("connection", async (socket) => {
//   const userId = socket.handshake.query.userId;

//   if (userId) userSocketMap[userId] = socket.id;

//   //Join all groups the user belongs t
//   try {
//     const groups = await Group.find({ members: userId }).select("_id");

//     groups.forEach((group) => {
//       socket.join(group._id.toString());
//     });
//   } catch (error) {
//     console.error("Error joining grp");
//   }

//   //Emit online users to all connected clients
//   io.emit("getOnlineUsers", Object.keys(userSocketMap));

//   socket.on("typing", ({ toUserId }) => {
//     const toSocketId = userSocketMap[toUserId];

//     if (toSocketId) {
//       io.to(toSocketId).emit("typing", { fromUserId: userId });
//     }
//   });

//   socket.on("stopTyping", ({ toUserId }) => {
//     const toSocketId = userSocketMap[toUserId];
//     if (toSocketId) {
//       io.to(toSocketId).emit("stopTyping", { fromUserId: userId });
//     }
//   });

//   //Group typing
//   socket.on("group-typing", ({ groupId, fromUserId, fullName }) => {
//     socket.to(groupId).emit("group-typing", {
//       fromUserId,
//       fullName,
//       groupId,
//     });
//   });

//   socket.on("group-stopTyping", ({ groupId, fromUserId }) => {
//     socket.to(groupId).emit("group-stopTyping", {
//       fromUserId,
//       groupId,
//     });
//   });

//   //if user joins a new grp after connection
//   socket.on("joinGroup", (groupId) => {
//     socket.join(groupId);
//   });

//   socket.on("message-seen", ({ messageIds, senderId, receiverId }) => {
//     const senderSocketId = userSocketMap[senderId];
//     if (senderSocketId) {
//       io.to(senderSocketId).emit("message-seen-update", {
//         messageIds,
//         receiverId,
//       });
//     }
//   });

//   socket.on("group-message-seen", ({ messageIds, senderId, groupId }) => {
//     const senderSocketId = userSocketMap[senderId];
//     if (senderSocketId) {
//       io.to(senderSocketId).emit("group-seen-update", {
//         groupId,
//         senderId,
//         messageIds,
//       });
//     }
//   });

//   socket.on("disconnect", () => {
//     delete userSocketMap[userId];
//     io.emit("getOnlineUsers", Object.keys(userSocketMap)); //emit updated online users list
//   });
// });

// //Middleware setup

// app.use(express.json({ limit: "10mb" })); //Parses incoming requests with JSON payloads
// app.use(express.urlencoded({ extended: true, limit: "10mb" })); // Parses incoming requests with URL-encoded payloads (like HTML form data)
// // extended: true → allows nested objects in form data

// app.use(cors()); //allows backend to accept req from different origins

// app.use("/api/server", (req, res) => {
//   res.send("Server is live");
// });
// app.use("/api/auth", userRouter);
// app.use("/api/message", messageRouter);
// app.use("/api/group", groupRouter);
// //connect to MongoDB
// await connectDB();

// if (process.env.NODE_ENV !== "production") {
//   const PORT = process.env.PORT || 3000;
//   server.listen(PORT, () => {
//     console.log("server listening on port : " + PORT);
//   });
// }

// //Export Server for vercel
// export default server;




// import dotenv from 'dotenv';
// dotenv.config();
// import express from "express";
// import cors from "cors";
// import http from "http";
// import { connectDB } from "./libs/db.js";
// import { Server } from "socket.io";
// import { userRouter } from "./routes/userRoutes.js";
// import { messageRouter } from "./routes/messageRoutes.js";
// import { groupRouter } from "./routes/groupRoutes.js";
// import { Group } from "./models/Group.js";

// //create express app and HTTP server
// const app = express();
// const server = http.createServer(app);

// // Initialize socket.io server
// export const io = new Server(server, {
//   cors: { origin: "*" },
// });

// //Store online users
// export const userSocketMap = {}; //{userId,socketId}

// //socket io connection Handler
// io.on("connection", async (socket) => {
//   const userId = socket.handshake.query.userId;

//   if (userId) userSocketMap[userId] = socket.id;

//   //Join all groups the user belongs to
//   try {
//     const groups = await Group.find({ members: userId }).select("_id");

//     groups.forEach((group) => {
//       socket.join(group._id.toString());
//     });
//   } catch (error) {
//     console.error("Error joining grp:", error);
//   }

//   //Emit online users to all connected clients
//   io.emit("getOnlineUsers", Object.keys(userSocketMap));

//   socket.on("typing", ({ toUserId }) => {
//     const toSocketId = userSocketMap[toUserId];

//     if (toSocketId) {
//       io.to(toSocketId).emit("typing", { fromUserId: userId });
//     }
//   });

//   socket.on("stopTyping", ({ toUserId }) => {
//     const toSocketId = userSocketMap[toUserId];
//     if (toSocketId) {
//       io.to(toSocketId).emit("stopTyping", { fromUserId: userId });
//     }
//   });

//   //Group typing
//   socket.on("group-typing", ({ groupId, fromUserId, fullName }) => {
//     socket.to(groupId).emit("group-typing", {
//       fromUserId,
//       fullName,
//       groupId,
//     });
//   });

//   socket.on("group-stopTyping", ({ groupId, fromUserId }) => {
//     socket.to(groupId).emit("group-stopTyping", {
//       fromUserId,
//       groupId,
//     });
//   });

//   //if user joins a new grp after connection
//   socket.on("joinGroup", (groupId) => {
//     socket.join(groupId);
//   });

//   socket.on("message-seen", ({ messageIds, senderId, receiverId }) => {
//     const senderSocketId = userSocketMap[senderId];
//     if (senderSocketId) {
//       io.to(senderSocketId).emit("message-seen-update", {
//         messageIds,
//         receiverId,
//       });
//     }
//   });

//   socket.on("group-message-seen", ({ messageIds, senderId, groupId }) => {
//     const senderSocketId = userSocketMap[senderId];
//     if (senderSocketId) {
//       io.to(senderSocketId).emit("group-seen-update", {
//         groupId,
//         senderId,
//         messageIds,
//       });
//     }
//   });

//   socket.on("disconnect", () => {
//     delete userSocketMap[userId];
//     io.emit("getOnlineUsers", Object.keys(userSocketMap)); //emit updated online users list
//   });
// });

// //Middleware setup
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true, limit: "10mb" }));
// app.use(cors());

// // API Routes
// app.use("/api/server", (req, res) => {
//   res.send("Server is live");
// });
// app.use("/api/auth", userRouter);
// app.use("/api/message", messageRouter);
// app.use("/api/group", groupRouter);

// // Function to start the server
// const startServer = async () => {
//   try {
//     // connect to MongoDB
//     await connectDB();
//     console.log("Successfully connected to MongoDB");

//     if (process.env.NODE_ENV !== "production") {
//       const PORT = process.env.PORT || 3000;
//       server.listen(PORT, () => {
//         console.log("server listening on port : " + PORT);
//       });
//     }
//   } catch (error) {
//     console.error("Failed to connect to the database or start the server:", error);
//     process.exit(1); // Exit with a failure code
//   }
// };

// // Start the server
// startServer();

// //Export Server for vercel
// export default server;



import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import http from "http";
import { connectDB } from "./libs/db.js";
import { Server } from "socket.io";
import { userRouter } from "./routes/userRoutes.js";
import { messageRouter } from "./routes/messageRoutes.js";
import { groupRouter } from "./routes/groupRoutes.js";
import { Group } from "./models/Group.js";

// Create express app and HTTP server
const app = express();
const server = http.createServer(app);

// Initialize socket.io server
export const io = new Server(server, {
  cors: { origin: "*" },
});

// Store online users
export const userSocketMap = {}; // { userId: socketId }

// Socket.io connection handler
io.on("connection", async (socket) => {
  const userId = socket.handshake.query.userId;

  if (userId) userSocketMap[userId] = socket.id;

  // Join all groups the user belongs to
  try {
    const groups = await Group.find({ members: userId }).select("_id");
    groups.forEach((group) => {
      socket.join(group._id.toString());
    });
  } catch (error) {
    console.error("Error joining group:", error);
  }

  // Emit online users to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("typing", ({ toUserId }) => {
    const toSocketId = userSocketMap[toUserId];
    if (toSocketId) {
      io.to(toSocketId).emit("typing", { fromUserId: userId });
    }
  });

  socket.on("stopTyping", ({ toUserId }) => {
    const toSocketId = userSocketMap[toUserId];
    if (toSocketId) {
      io.to(toSocketId).emit("stopTyping", { fromUserId: userId });
    }
  });

  // Group typing
  socket.on("group-typing", ({ groupId, fromUserId, fullName }) => {
    socket.to(groupId).emit("group-typing", {
      fromUserId,
      fullName,
      groupId,
    });
  });

  socket.on("group-stopTyping", ({ groupId, fromUserId }) => {
    socket.to(groupId).emit("group-stopTyping", {
      fromUserId,
      groupId,
    });
  });

  // If user joins a new group after connection
  socket.on("joinGroup", (groupId) => {
    socket.join(groupId);
  });

  socket.on("message-seen", ({ messageIds, senderId, receiverId }) => {
    const senderSocketId = userSocketMap[senderId];
    if (senderSocketId) {
      io.to(senderSocketId).emit("message-seen-update", {
        messageIds,
        receiverId,
      });
    }
  });

  socket.on("group-message-seen", ({ messageIds, senderId, groupId }) => {
    const senderSocketId = userSocketMap[senderId];
    if (senderSocketId) {
      io.to(senderSocketId).emit("group-seen-update", {
        groupId,
        senderId,
        messageIds,
      });
    }
  });

  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// Middleware setup
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cors());

// API Routes
app.use("/api/server", (req, res) => {
  res.send("Server is live");
});
app.use("/api/auth", userRouter);
app.use("/api/message", messageRouter);
app.use("/api/group", groupRouter);

// Function to start the server
const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ Successfully connected to MongoDB");

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log("🚀 Server listening on port : " + PORT);
    });
  } catch (error) {
    console.error("❌ Failed to connect to the database or start the server:", error);
    process.exit(1);
  }
};

// Start the server
startServer();

// Export server for Vercel (optional if needed)
export default server;
