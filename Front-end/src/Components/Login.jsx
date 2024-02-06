import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Register from './Register';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { LoginShowed } from '../action/action';
import { useEffect } from 'react';


function Login() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const LoginData = (data) => {
        // console.log(data);

        axios.post("/api/Login", { ...data }).then((res) => {
            // console.log("login res from server", res.data);
            if (res.data) {
                localStorage.setItem("usertoken", res.data.token);
                dispatch(LoginShowed(res.data.loggedUser));
                navigate("/Home")
            }
            else if (res.data.message) {
                alert(res.data.message);
            }
            // if(res.data.loggedUser){
            //     console.log("user ha" , res.data.loggedUser);
            // }
        }).catch((err) => {
            console.log(err, "Login Data Disqualified");
        })
    }



    return (
        <div className="bg-gradient-to-tl bg-zinc-100 w-full flex justify-center">
            <div className="mb-5 xl:w-2/4 lg:w-2/4 md:w-11/12 sm:w-11/12 max-w-6xl">
                <div className="flex lg:w-full flex-col items-center justify-center">
                    <div className="bg-white shadow rounded lg:w-full md:w-1/2 w-full p-10 mt-16">
                        <p tabIndex="0" role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                            Login to your account
                        </p>
                        <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                            Don't have an account?
                            <span tabIndex="0" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                                <Link to={"/Registeration"}>
                                    Sign up here
                                </Link>
                            </span>
                        </p>
                        <Link
                            aria-label="Continue with google"
                            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
                        >
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* ... SVG path data ... */}
                            </svg>
                            <p className="text-base font-medium ml-4 text-gray-700">
                                Continue with Google
                            </p>
                        </Link>
                        <div className="w-full flex items-center justify-between py-5">
                            <hr className="w-full bg-gray-400" />
                            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                                OR
                            </p>
                            <hr className="w-full bg-gray-400" />
                        </div>
                        <form onSubmit={handleSubmit(LoginData)}>
                            <div className="text-left">
                                <label className="text-sm font-medium leading-none text-gray-800">
                                    Email
                                </label>
                                <input
                                    {...register('Email', { required: true })}
                                    aria-label="enter email address"
                                    className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                    type="email"
                                />
                                <div className="h-2"></div>
                            </div>
                            <div className="mt-6 text-left w-full">
                                <label className="text-sm font-medium leading-none text-gray-800">
                                    Password
                                </label>
                                <div className="relative flex items-center justify-center">
                                    <input
                                        {...register('Password', { required: true })}
                                        aria-label="enter Password"
                                        role="input"
                                        className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                        type="password"
                                    />
                                    <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                        {/* Eye icon or any other icon for password visibility toggle */}
                                    </div>
                                </div>
                                <div className="h-2"></div>
                            </div>
                            <div className="mt-8">
                                <button
                                    role="button"
                                    aria-label="login"
                                    className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="Toastify"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
