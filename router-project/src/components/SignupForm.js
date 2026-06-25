import React from 'react'
import {useState} from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const [formData , setFormData] = useState({
        firstName:"" ,
        lastName:"",
        email:"",
        password:"",
        conformPassword:"",
        

    })

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType , setAccountType] = useState("student");

    function changeHandler(event){
        setFormData((prevData) =>(
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.conformPassword){
            toast.error("Passwords do not match");
            return ;
        }
        setIsLoggedIn(true);
        toast.success("Account created");    
        const accountData = {
            ...formData
        }

        const finalData = {
            ...accountData,accountData
        }
        console.log("printing final account data" ,finalData);
        navigate("/dashboard");   
    }
  return (
    <div >
        {/* student instructor tab */}

        
        <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max border-b border-richblack-700">
            <button 
                type="button" 
                onClick={() => setAccountType("student")}
                className={`py-2 px-5 rounded-full transition-all duration-200 ${
                    accountType === "student" 
                    ? "bg-richblack-900 text-richblack-5" 
                    : "bg-transparent text-richblack-200"
                }`}
            >
                Student
            </button>

            <button
                type="button" 
                onClick={() => setAccountType("instructor")}
                className={`py-2 px-5 rounded-full transition-all duration-200 ${
                    accountType === "instructor" 
                    ? "bg-richblack-900 text-richblack-5" 
                    : "bg-transparent text-richblack-200"
                }`}
            >
                Instructor
            </button>
        </div>

        

        <form onSubmit={submitHandler}
              
        >
            <div className=" flex gap-x-3 mt-6 ">
                {/* first name last name */}
                <label className=" w-full  " >
                    <p
                     className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]  "
                    >
                    First Name<sup className=" text-pink-200  " >*</sup></p>

                    <input
                        required
                        type="text"
                        name="firstName"
                        onChange = {changeHandler}
                        placeholder ="Enter first name "
                        value={formData.firstName}
                        className="  bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border- border-b-2"

                    />
                </label>

                <label className=" w-full  " >
                    <p
                        className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]  "
                    >Last Name<sup className=" text-pink-200  " >*</sup></p>

                    <input
                        required
                        type="text"
                        name="lastName"
                        onChange = {changeHandler}
                        placeholder ="Enter last name "
                        value={formData.lastName}
                        className="  bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border- border-b-2"
                    />
                </label>
            </div>

            <div className=" mt-6" >
                <label className=" w-full " >
                    <p
                        className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]  "
                    >Email Address<sup className=" text-pink-200  " >*</sup></p>

                    <input
                        required
                        type="email"
                        name="email"
                        onChange = {changeHandler}
                        placeholder ="Enter Email address"
                        value={formData.email}
                        className="  bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border- border-b-2"

                    />
                </label>
            </div>

            

            {/* create password confor password */}
            <div className=" flex gap-x-3 mt-6">
                <label className=" w-full relative  ">
                    <p
                        className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]  "
                    >Create Password<sup className=" text-pink-200  " >*</sup></p>

                    <input
                        required
                        type={ showPassword ? ("text") : ("password")  }
                        name="password"
                        onChange = {changeHandler}
                        placeholder ="Password"
                        value={formData.password}
                        className="  bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border- border-b-2"

                    />

                    <span
                     className=" absolute right-3 top-[38px] cursor-pointer  "
                    
                    onClick={() => setShowPassword((prev) =>(!prev))    }>
                        {
                            showPassword ? 
                            (<Eye fontsize={24} fill='#AFB2BF' />) : 
                            (<EyeOff fontsize={24} fill='#AFB2BF' />)
                        }
                    </span>
                </label>

                <label className=" w-full relative " >
                    <p
                        className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]  "
                    >Conform Password<sup>*</sup></p>

                    <input
                        required
                        type={ showConfirmPassword ? ("text") : ("password")  }
                        name="conformPassword"
                        onChange = {changeHandler}
                        placeholder ="Comform Password"
                        value={formData.conformPassword}
                        className="  bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border- border-b-2"

                    />

                    <span
                        className=" absolute right-3 top-[38px] cursor-pointer  "
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {
                            showConfirmPassword ? 
                            (<Eye fontsize={24} fill='#AFB2BF' /> ): 
                            (<EyeOff fontsize={24} fill='#AFB2BF' />)
                        }
                    </span>
                </label>

            </div>
            <button 
                 className=" mt-6 w-full  bg-yellow-400 rounded-[8px] font-medium text-richblack-900 py-[8px] px-[12px] "
            >Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm