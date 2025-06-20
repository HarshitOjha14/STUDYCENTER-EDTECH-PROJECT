import "./App.css";
import { useEffect } from "react"
import { Route,Routes,useNavigate } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import ForgotPassword from "./pages/ForgotPassword";
import OpenRoute from "./components/core/Auth/OpenRoute";
import UpdatePassword from "./pages/UpdatePassword";
import AddCourse from "./components/core/Dashboard/AddCourse"
import EditCourse from "./components/core/Dashboard/EditCourse"
import Instructor from "./components/core/Dashboard/Instructor"
import MyCourses from "./components/core/Dashboard/MyCourses"
import MyProfile from "./components/core/Dashboard/MyProfile"
import Settings from "./components/core/Dashboard/Settings"
import VideoDetails from "./components/core/ViewCourse/VideoDetails"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Catalog from "./pages/Catalog"
import CourseDetails from "./pages/CourseDetails"

import Error from "./pages/Error"
import Contact from "./pages/Contact";

import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/core/Auth/PrivateRoute";


import { useDispatch, useSelector } from "react-redux";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constants";

import ViewCourse from "./pages/ViewCourse"
import { getUserDetails } from "./services/operations/profileAPI"

function App() {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
       
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="courses/:courseId" element={<CourseDetails />} />
      <Route path="catalog/:catalogName" element={<Catalog />} />

      <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

      
      <Route
        path ="forgot-Password"
        element={
          <OpenRoute>
            <ForgotPassword/>
          </OpenRoute>
        }
      />

     <Route
        path ="verify-email"
        element={
          <OpenRoute>
            <VerifyEmail/>
          </OpenRoute>
        }
      />
   

      <Route
        path ="update-Password/:id"
        element={
          <OpenRoute>
            <UpdatePassword/>
          </OpenRoute>
        }
      />

      {/* <Route
        path ="about"
        element={
          <OpenRoute>
            <About/>
          </OpenRoute>
        }
      />


       <Route path="/contact" element={<Contact />} /> */}

      <Route 
              element={
          <PrivateRoute>
             <Dashboard />
           </PrivateRoute>
           }
>
              <Route path="dashboard/my-profile" element={<MyProfile />} />
               <Route path="dashboard/Settings" element={<Settings />} />
  

            {
            user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
           <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
           </>
          )
             }

{user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )}
          <Route path="dashboard/settings" element={<Settings />} />
        </Route>

        {/* For the watching course lectures */}
        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}


          </Route>



           <Route path="*" element={<Error />} />
        </Routes>
     
       </div>
  );
}

export default App;
