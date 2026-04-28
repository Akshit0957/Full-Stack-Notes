// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Axios } from 'axios'



// // import BackendDemo from './components/1_BackendDemo'
// // import GetExample from './components/2_Get'
// //  import PostExample from './components/3_Post'
// // import PutExample from './components/4_Put'
// //import DeleteExample from './components/5_Delete'
// // import PatchExample from './components/6_Patch'
// //import AxiosCrud from './components/7_AxiosCrud'
// // import Profile from './components/8_Context_Api/Profile.jsx'
// // import Dashboard from './components/8_Context_Api/Dashboard.jsx'
// // import Navbar from './components/8_Context_Api/Navbar.jsx'
// import JWTTokenDemo from './components/9_JWT_token.jsx'


// function App() {
  
//   return (
//     <>
//   {/* <BackendDemo></BackendDemo> */}
//   {/* <GetExample></GetExample> */}
//   {/* <PostExample></PostExample> */}
//   {/* <PutExample></PutExample> */}
//   {/* <DeleteExample></DeleteExample> */}
//   {/* <PatchExample></PatchExample> */}
// {/* <AxiosCrud></AxiosCrud> */}
// {/* <Profile />
// <Navbar></Navbar>
// <Dashboard></Dashboard> */}
// <JWTTokenDemo></JWTTokenDemo>

//     </>
//   )
// }

// export default App

//Redux Counter App

import "./App.css";
import Users from "./components/11_Redux/Users";
import AddUser from "./components/11_Redux/AddUser";

function App() {
  console.log("🚀 App rendered");

  return (
    <div className="app-container">
      <h1>MERN Redux User Management</h1>

      <div className="card">
        <AddUser />
      </div>

      <div className="card">
        <Users />
      </div>
    </div>
  );
}

export default App;