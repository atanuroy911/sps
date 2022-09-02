import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [auth, setAuth] = useState(false);
    const [firstD, setFirstD] = useState(true);
    const navigate = useNavigate();
    const onSubmit = data => {
        axios.post('http://localhost:4000/sps/login', {
            data: data
        })
        .then(response => {
            setAuth(response.data.auth)
            setFirstD(false);
            if(response.data.auth){
                navigate('/dashboard/home')
            }
        })
    };
    return (
        <div>
            <section className="h-screen">
                <Link to='/'><h1 className='text-4xl text-sky-700 mt-6'>Smart Parking System</h1></Link>
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Eletronic_parking_system.svg/810px-Eletronic_parking_system.svg.png"
                                className="w-full"
                                alt="Phone"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            {auth || firstD ? <></> : <h4 className='text-red-500'>Wrong Credentials Try Again</h4>}
                            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                                {/* Username input */}
                                <div className="mb-6">
                                    <input {...register("userName")}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Username"
                                        
                                    />
                                </div>
                                {/* Password input */}
                                <div className="mb-6">
                                    <input {...register("password")}
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                        
                                    />
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck3"
                                            defaultChecked=""
                                        />
                                        <label
                                            className="form-check-label inline-block text-gray-800"
                                            htmlFor="exampleCheck2"
                                        > Remember me
                                        </label>
                                    </div>
                                    <a
                                        href="#!"
                                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Login;