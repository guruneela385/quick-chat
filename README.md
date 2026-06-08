# Quick Chat 💬

A real-time chat application built with **React** and **Node.js** that enables users to communicate instantly with others. The application features one-on-one messaging, group chats, typing indicators, and message read receipts.

**Live Demo:** [https://quick-chat-silk.vercel.app](https://quick-chat-silk.vercel.app)

---

## 🌟 Features

- **Real-time Messaging**: Send and receive messages instantly using Socket.io
- **User Authentication**: Secure sign-up and login with JWT tokens
- **One-on-One Chat**: Direct messaging between two users
- **Group Chat**: Create and manage group conversations
- **Typing Indicators**: See when someone is typing in real-time
- **Message Read Receipts**: Know when your messages have been read
- **Online Status**: View which users are currently online
- **User Profiles**: Profile pictures and user information (powered by Cloudinary)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and React components

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Socket.io Client** - Real-time communication
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications
- **FontAwesome Icons** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Socket.io** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT (jsonwebtoken)** - Authentication
- **Bcryptjs** - Password hashing
- **Cloudinary** - Image upload and management
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variables

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud - MongoDB Atlas)
- **Cloudinary Account** (for image uploads)

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/guruneela385/quick-chat.git
cd quick-chat
```

### 2. Backend Setup

#### Navigate to the server directory:
```bash
cd server
```

#### Install dependencies:
```bash
npm install
```

#### Create a `.env` file in the server directory:
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### Start the backend server:
```bash
npm run server
```

The server will start on `http://localhost:3000`

---

### 3. Frontend Setup

#### Open a new terminal and navigate to the client directory:
```bash
cd client
```

#### Install dependencies:
```bash
npm install
```

#### Create a `.env` file in the client directory:
```env
VITE_API_URL=http://localhost:3000
```

#### Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

---

## 📁 Project Structure

```
quick-chat/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── context/        # React Context for state management
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx         # Main App component
│   │   └── main.jsx        # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Node.js Backend
│   ├── libs/               # Database connection
│   ├── routes/             # API routes
│   │   ├── userRoutes.js   # User authentication routes
│   │   ├── messageRoutes.js # Message routes
│   │   └── groupRoutes.js  # Group chat routes
│   ├── models/             # MongoDB schemas
│   │   ├── User.js
│   │   ├── Message.js
│   │   └── Group.js
│   ├── server.js           # Main server file
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

## 🔌 Socket.io Events

### Client to Server
- **typing** - User is typing a message
- **stopTyping** - User stopped typing
- **group-typing** - User typing in a group
- **group-stopTyping** - User stopped typing in a group
- **joinGroup** - User joins a group
- **message-seen** - Message has been read
- **group-message-seen** - Group message has been read

### Server to Client
- **getOnlineUsers** - List of currently online users
- **typing** - Receive typing notification
- **stopTyping** - Receive stop typing notification
- **group-typing** - Receive group typing notification
- **group-stopTyping** - Receive group stop typing notification
- **message-seen-update** - Message read receipt
- **group-seen-update** - Group message read receipt

---

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Messages
- `GET /api/message/:userId` - Get messages with a user
- `POST /api/message` - Send a message
- `PUT /api/message/:messageId` - Update a message

### Groups
- `GET /api/group` - Get all groups
- `POST /api/group` - Create a new group
- `GET /api/group/:groupId` - Get group details
- `PUT /api/group/:groupId` - Update group
- `DELETE /api/group/:groupId` - Delete group

---

## 🌐 Environment Variables

### Backend (.env)
```
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_secret_key_here
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000
```

---

## 🎨 UI Components & Features

- **Authentication Pages** - Login and registration
- **Chat Interface** - Message list and input
- **User List** - Online users and recent chats
- **Group Management** - Create and manage groups
- **User Profile** - View and edit user information
- **Responsive Layout** - Mobile-friendly design

---

## 🐛 Known Issues & Future Enhancements

### Known Issues
- Server.js is partially commented out - needs activation
- Error handling can be improved
- Input validation needs enhancement

### Future Enhancements
- [ ] Video/Voice calling
- [ ] Message encryption
- [ ] File sharing
- [ ] Search functionality
- [ ] User blocking/unblocking
- [ ] Message reactions
- [ ] Dark mode
- [ ] Two-factor authentication

---

## 📝 Scripts

### Backend
```bash
npm run server      # Run server with nodemon (development)
npm start           # Run server in production
```

### Frontend
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run lint        # Run ESLint
npm run preview     # Preview production build
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👤 Author

**Guruneela** - [GitHub Profile](https://github.com/guruneela385)

---

## 📞 Support

For issues and questions, please:
- Open an [issue on GitHub](https://github.com/guruneela385/quick-chat/issues)
- Check existing documentation
- Review the code comments

---

## 🙏 Acknowledgments

- Inspired by popular chat applications
- Built with modern web technologies
- Tailwind CSS for beautiful styling
- Socket.io for real-time communication

---

**Last Updated:** June 2026

Happy Chatting! 🚀
