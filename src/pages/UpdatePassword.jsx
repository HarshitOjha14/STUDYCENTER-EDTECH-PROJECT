import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../services/operations/authAPI";
import { useLocation ,useNavigate} from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { Link } from "react-router-dom";

 const UpdatePassword = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();


    const[formData,setFormData] = useState({
        password:"",
        confirmPassword:"",

    })
    const [showPassword,setShowPassword] = useState(false);
    const[showConfirmPassword,setShowConfirmPassword] = useState(false);
    const {loading}  = useSelector( (state) => state.auth)
    const {password,confirmPassword} =formData;

    const handleOnChange = (e) => {
        setFormData( (prevData) => (
            {
                ...prevData,
                [e.target.name] : e.target.value,
            }
        ))
    }

    const handleOnSubmit = (e) => {

        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password,confirmPassword, token, navigate));
    }
    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblack-900 px-4">
          {loading ? (
            <div className="spinner" />
          ) : (
            <div className="w-full max-w-[500px] rounded-lg bg-richblack-800 p-6 shadow-md lg:p-10">
              <h1 className="text-2xl font-semibold text-richblack-5 lg:text-3xl">
                Choose New Password
              </h1>
              <p className="mt-2 text-sm text-richblack-100 lg:text-base">
                Almost done. Enter your new password and you’re all set.
              </p>
      
              <form onSubmit={handleOnSubmit} className="mt-6 space-y-5">
                {/* New Password */}
                <div className="relative">
                  <label className="mb-1 block text-sm text-richblack-5">
                    New Password <sup className="text-pink-200">*</sup>
                  </label>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    placeholder="Enter new password"
                    className="form-style w-full pr-10"
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-[42px] z-10 cursor-pointer"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF" />
                    ) : (
                      <AiOutlineEye fontSize={22} fill="#AFB2BF" />
                    )}
                  </span>
                </div>
      
                {/* Confirm Password */}
                <div className="relative">
                  <label className="mb-1 block text-sm text-richblack-5">
                    Confirm New Password <sup className="text-pink-200">*</sup>
                  </label>
                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleOnChange}
                    placeholder="Confirm password"
                    className="form-style w-full pr-10"
                  />
                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-[42px] z-10 cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF" />
                    ) : (
                      <AiOutlineEye fontSize={22} fill="#AFB2BF" />
                    )}
                  </span>
                </div>
      
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-yellow-50 py-3 text-base font-semibold text-richblack-900 transition hover:bg-yellow-100"
                >
                  Reset Password
                </button>
              </form>
      
              {/* Back to Login */}
              <div className="mt-6 flex justify-center">
                <Link
                  to="/login"
                  className="flex items-center gap-x-2 text-sm text-richblack-5 hover:underline"
                >
                  <BiArrowBack />
                  Back to Login
                </Link>
              </div>
            </div>
          )}
        </div>
      )
    }      


    
    export default UpdatePassword