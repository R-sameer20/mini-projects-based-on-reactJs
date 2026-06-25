import React from 'react'
import {useState} from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const LoginForm = ({setIsLoggedIn}) => {
    const [formData , setFormData] = useState({
        email:"" ,
        password:""
    })

    const[showPassword , setShowPassword] = useState(false);

    const navigate = useNavigate()

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
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")
        console.log("printing the login form data : " , formData)
    }
  return (
    <form onSubmit={submitHandler}
        className=" flex flex-col w-full gap-y-4 mt-6  "
    >

        <label className=" w-full  ">
            <p
                className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]  "
            >Email Address<sup className=" text-pink-200  " >*</sup></p>   

            <input
                required 
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"

                className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border- border-b-2 "
            ></input>
        </label>

        <label className=" w-full  relative " >
            <p
                 className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]  "
            >Password<sup className=" text-pink-200  " >*</sup></p>   

            <input
                required 
                type={showPassword ? ("text") : ("password") }
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"

                 className="  bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border- border-b-2"
            ></input>

            <span 
            className=" absolute right-3 top-[38px] cursor-pointer  "
            onClick={() => setShowPassword((prev) =>(!prev))    }>
                {
                    showPassword ? 
                    (<Eye   fontsize={24} fill='#AFB2BF'  />) : 
                    (<EyeOff fontsize={24} fill='#AFB2BF' />)
                }
            </span>

            <Link to="/forgot-password">
                <p 
                    className=" text-xs text-blue-200 max-w-max ml-auto  "
                >Forgot Password</p>
            </Link>
        </label>
        
        <button
            className=" mt-5  bg-yellow-400 rounded-[8px] font-medium text-richblack-900 py-[8px] px-[12px] "
        >
            Sign In
        </button>
    </form>
    
    
    
    
  )
}

export default LoginForm