// import React, { useState } from "react";
// import assets from "../assets/assets";
// import { useAuthContext } from "../context/AuthContext";

// const Login = () => {
//   const [isSignInState, setIsSignInState] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [bio, setBio] = useState("");
//   const [isDataSubmitted, setIsDataSubmited] = useState(false);

//   const { login } = useAuthContext();

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     if (isSignInState && !isDataSubmitted) {
//       setIsDataSubmited(true);
//       return;
//     }

//     login(isSignInState ? "register" : "login", {
//       fullName: name,
//       email,
//       bio,
//       password,
//     });
//   };
//   return (
//     <div className="min-h-screen  bg-cover  bg-center  backdrop-blur-xl flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
//       <img src={assets.logo_big} alt="" className=" w-[min(30vh,250px)]" />
//       <form
//         onSubmit={onSubmitHandler}
//         className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col rounded-lg shadow-lg gap-6"
//       >
//         <h2 className="font-medium text-2xl flex justify-between items-center ">
//           {isSignInState ? "Signup" : "Login"}
//           {isDataSubmitted && (
//             <img
//               onClick={() => setIsDataSubmited(false)}
//               src={assets.arrow_icon}
//               alt=""
//               className="w-5 cursor-pointer"
//             />
//           )}
//         </h2>

//         {isSignInState && !isDataSubmitted && (
//           <input
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//             value={name}
//             type="text"
//             className="p-2  border-2 border-gray-500 rounded-md focus:outline-none"
//             placeholder="enter name"
//             required
//           />
//         )}
//         {!isDataSubmitted && (
//           <input
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             value={email}
//             type="text"
//             className="p-2  border-2 border-gray-500 rounded-md focus:outline-none"
//             placeholder="enter email"
//             required
//           />
//         )}
//         {!isDataSubmitted && (
//           <input
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             value={password}
//             type="text"
//             className="p-2  border-2 border-gray-500 rounded-md focus:ring-2 focus:ring-indigo-500"
//             placeholder="enter password"
//             required
//           />
//         )}
//         {isDataSubmitted && isDataSubmitted && (
//           <textarea
//             rows={4}
//             onChange={(e) => setBio(e.target.value)}
//             value={bio}
//             placeholder="enter some  bio.."
//             className="p-2  border-2  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         )}

//         <button
//           type="submit"
//           className=" py-2  bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md "
//         >
//           {isSignInState ? "Create your Account" : "Login "}
//         </button>

//         <div className="flex items-center gap-2 text-sm text-gray-500">
//           <input type="checkbox" required />
//           <p>Agree to the terms of use & privacy policy</p>
//         </div>

//         <div className="flex flex-col gap-2">
//           {isSignInState ? (
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <span
//                 onClick={() => {
//                   setIsSignInState(!isSignInState), setIsDataSubmited(false);
//                 }}
//                 className="font-medium text-violet-500 cursor-pointer"
//               >
//                 Login here
//               </span>
//             </p>
//           ) : (
//             <p className="text-sm text-gray-600">
//               Do not have an account? {"  "}
//               <span
//                 onClick={() => {
//                   setIsSignInState(!isSignInState), setIsDataSubmited(false);
//                 }}
//                 className="font-medium text-violet-500 cursor-pointer"
//               >
//                 Click here
//               </span>
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;





// import React, { useState, useEffect } from "react";
// import assets from "../assets/assets";
// import { useAuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [isSignInState, setIsSignInState] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [bio, setBio] = useState("");
//   const [isDataSubmitted, setIsDataSubmited] = useState(false);

//   const { login, authUser } = useAuthContext();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (authUser) {
//       navigate("/");
//     }
//   }, [authUser, navigate]);

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     if (isSignInState && !isDataSubmitted) {
//       setIsDataSubmited(true);
//       return;
//     }

//     login(isSignInState ? "register" : "login", {
//       fullName: name,
//       email,
//       bio,
//       password,
//     });
//   };
//   return (
//     <div className="min-h-screen  bg-cover  bg-center  backdrop-blur-xl flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
//       <img src={assets.logo_big} alt="" className=" w-[min(30vh,250px)]" />
//       <form
//         onSubmit={onSubmitHandler}
//         className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col rounded-lg shadow-lg gap-6"
//       >
//         <h2 className="font-medium text-2xl flex justify-between items-center ">
//           {isSignInState ? "Signup" : "Login"}
//           {isDataSubmitted && (
//             <img
//               onClick={() => setIsDataSubmited(false)}
//               src={assets.arrow_icon}
//               alt=""
//               className="w-5 cursor-pointer"
//             />
//           )}
//         </h2>

//         {isSignInState && !isDataSubmitted && (
//           <input
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//             value={name}
//             type="text"
//             className="p-2  border-2 border-gray-500 rounded-md focus:outline-none"
//             placeholder="enter name"
//             required
//           />
//         )}
//         {!isDataSubmitted && (
//           <input
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             value={email}
//             type="text"
//             className="p-2  border-2 border-gray-500 rounded-md focus:outline-none"
//             placeholder="enter email"
//             required
//           />
//         )}
//         {!isDataSubmitted && (
//           <input
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             value={password}
//             type="text"
//             className="p-2  border-2 border-gray-500 rounded-md focus:ring-2 focus:ring-indigo-500"
//             placeholder="enter password"
//             required
//           />
//         )}
//         {isDataSubmitted && isDataSubmitted && (
//           <textarea
//             rows={4}
//             onChange={(e) => setBio(e.target.value)}
//             value={bio}
//             placeholder="enter some  bio.."
//             className="p-2  border-2  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         )}

//         <button
//           type="submit"
//           className=" py-2  bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md "
//         >
//           {isSignInState ? "Create your Account" : "Login "}
//         </button>

//         <div className="flex items-center gap-2 text-sm text-gray-500">
//           <input type="checkbox" required />
//           <p>Agree to the terms of use & privacy policy</p>
//         </div>

//         <div className="flex flex-col gap-2">
//           {isSignInState ? (
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <span
//                 onClick={() => {
//                   setIsSignInState(!isSignInState), setIsDataSubmited(false);
//                 }}
//                 className="font-medium text-violet-500 cursor-pointer"
//               >
//                 Login here
//               </span>
//             </p>
//           ) : (
//             <p className="text-sm text-gray-600">
//               Do not have an account? {"  "}
//               <span
//                 onClick={() => {
//                   setIsSignInState(!isSignInState), setIsDataSubmited(false);
//                 }}
//                 className="font-medium text-violet-500 cursor-pointer"
//               >
//                 Click here
//               </span>
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import assets from "../assets/assets";
// import { useAuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom"; // Ensure this is imported

// const Login = () => {
//   const [isSignInState, setIsSignInState] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [bio, setBio] = useState("");
//   const [isDataSubmitted, setIsDataSubmited] = useState(false);

//   const { login } = useAuthContext();
//   const navigate = useNavigate(); // Get the navigate function here

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     if (isSignInState && !isDataSubmitted) {
//       setIsDataSubmited(true);
//       return;
//     }

//     // Await the login function
//     const success = await login(isSignInState ? "register" : "login", {
//       fullName: name,
//       email,
//       bio,
//       password,
//     });

//     // Handle the redirect after a successful login
//     if (success) {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="min-h-screen  bg-cover  bg-center  backdrop-blur-xl flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
//       <img src={assets.logo_big} alt="" className=" w-[min(30vh,250px)]" />
//       <form
//         onSubmit={onSubmitHandler}
//         className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col rounded-lg shadow-lg gap-6"
//       >
//         <h2 className="font-medium text-2xl flex justify-between items-center ">
//           {isSignInState ? "Signup" : "Login"}
//           {isDataSubmitted && (
//             <img
//               onClick={() => setIsDataSubmited(false)}
//               src={assets.arrow_icon}
//               alt=""
//               className="w-5 cursor-pointer"
//             />
//           )}
//         </h2>

//         {isSignInState && !isDataSubmitted && (
//           <input
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//             value={name}
//             type="text"
//             className="p-2  border-2 border-gray-500 rounded-md focus:outline-none"
//             placeholder="enter name"
//             required
//           />
//         )}
//         {!isDataSubmitted && (
//           <input
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             value={email}
//             type="text"
//             className="p-2  border-2 border-gray-500 rounded-md focus:outline-none"
//             placeholder="enter email"
//             required
//           />
//         )}
//         {!isDataSubmitted && (
//           <input
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             value={password}
//             type="text"
//             className="p-2  border-2 border-gray-500 rounded-md focus:ring-2 focus:ring-indigo-500"
//             placeholder="enter password"
//             required
//           />
//         )}
//         {isDataSubmitted && isDataSubmitted && (
//           <textarea
//             rows={4}
//             onChange={(e) => setBio(e.target.value)}
//             value={bio}
//             placeholder="enter some  bio.."
//             className="p-2  border-2  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         )}

//         <button
//           type="submit"
//           className=" py-2  bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md "
//         >
//           {isSignInState ? "Create your Account" : "Login "}
//         </button>

//         <div className="flex items-center gap-2 text-sm text-gray-500">
//           <input type="checkbox" required />
//           <p>Agree to the terms of use & privacy policy</p>
//         </div>

//         <div className="flex flex-col gap-2">
//           {isSignInState ? (
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <span
//                 onClick={() => {
//                   setIsSignInState(!isSignInState), setIsDataSubmited(false);
//                 }}
//                 className="font-medium text-violet-500 cursor-pointer"
//               >
//                 Login here
//               </span>
//             </p>
//           ) : (
//             <p className="text-sm text-gray-600">
//               Do not have an account? {"  "}
//               <span
//                 onClick={() => {
//                   setIsSignInState(!isSignInState), setIsDataSubmited(false);
//                 }}
//                 className="font-medium text-violet-500 cursor-pointer"
//               >
//                 Click here
//               </span>
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import assets from "../assets/assets";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const [isSignInState, setIsSignInState] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuthContext();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (isSignInState && !isDataSubmitted) {
      setIsDataSubmited(true);
      return;
    }

    setLoading(true);
    await login(isSignInState ? "register" : "login", {
      fullName: name,
      email,
      bio,
      password,
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-cover bg-center backdrop-blur-xl flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col">
      <img src={assets.logo_big} alt="" className="w-[min(30vh,250px)]" />
      <form
        onSubmit={onSubmitHandler}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col rounded-lg shadow-lg gap-6"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center ">
          {isSignInState ? "Signup" : "Login"}
          {isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmited(false)}
              src={assets.arrow_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          )}
        </h2>

        {isSignInState && !isDataSubmitted && (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="p-2 border-2 border-gray-500 rounded-md focus:outline-none"
            placeholder="Enter full name"
            required
          />
        )}
        {!isDataSubmitted && (
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="p-2 border-2 border-gray-500 rounded-md focus:outline-none"
            placeholder="Enter email"
            required
          />
        )}
        {!isDataSubmitted && (
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="p-2 border-2 border-gray-500 rounded-md focus:outline-none"
            placeholder="Enter password"
            required
          />
        )}
        {isDataSubmitted && isSignInState && (
          <textarea
            rows={4}
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="Enter your bio..."
            className="p-2 border-2 border-gray-500 rounded-md focus:outline-none"
            required
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className={`py-2 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading
            ? "Please wait..."
            : isSignInState
            ? "Create your Account"
            : "Login"}
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" required />
          <p>Agree to the terms of use & privacy policy</p>
        </div>

        <div className="flex flex-col gap-2">
          {isSignInState ? (
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setIsSignInState(false);
                  setIsDataSubmited(false);
                }}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <span
                onClick={() => {
                  setIsSignInState(true);
                  setIsDataSubmited(false);
                }}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Sign up
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
