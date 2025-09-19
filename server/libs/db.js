import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);
  } catch (error) {
    console.error(error);
  }
};


// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     mongoose.connection.on("connected", () => {
//       console.log("Database connected");
//     });

//     await mongoose.connect(process.env.MONGO_URI);
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };


// server/libs/db.js
/*import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("✅ Database connected");
    });

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};*/

