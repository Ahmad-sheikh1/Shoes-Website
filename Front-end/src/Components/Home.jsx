import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Home() {

    const S_Data = useSelector((state) => state.Login).shoedata;
    // console.log(S_Data);

    return (
        <>
            <div>
                <img
                    alt="Picture of the author"
                    loading="lazy"
                    width={1920}
                    height={785}
                    decoding="async"
                    data-nimg={1}
                    className="m-auto"
                    sizes="100vw"
                    src="https://shoe-paradies.vercel.app/_next/image?url=%2FBanner.webp&w=1920&q=75"
                    style={{ color: "transparent", width: "100%", height: "auto" }}
                />
            </div>
            {/* Category pictures */}
            <div className="grid grid-cols-4 laptop:grid-cols-4 tablet:grid-cols-4 desktop:grid-cols-4 gap-2 mt-7 w-full pl-4 pr-4">
                {/* Your category images and descriptions go here */}
            </div>
            {/* products */}
            <div className="mt-[30px] flex justify-between"> <span className="flex"><p className=" text-xl   md:text-4xl lg:text-4xl xl:text-4xl font-semibold ml-10 ">--Product</p> <p className="text-3xl text-slate-300 font-semibold ml-10   tablet:inline laptop:inline desktop:inline">Check our new product</p></span> <p className="text-1xl font-semibold mr-10 hover:text-white hover:bg-black cursor-pointer h-fit ">VIEW ALL</p></div>

            {/* cards */}

          <div className="flex flex-wrap justify-center">
                {S_Data.map((product, index) => {
                    return (
                        <div key={product._id} className="relative m-7 w-full max-w-[275px] overflow-hidden rounded-lg bg-white shadow-md" >
                            <Link to={`/Home/${product._id}`}>
                                <div >
                                    <img
                                        className="h-60 rounded-t-lg object-cover w-full"
                                        src={product.img}
                                        alt="product image"
                                    />
                                </div>

                                <div className="mt-4 px-5 pb-5">
                                    <span >
                                        <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                                            {product.productname}
                                        </h5>
                                    </span>
                                    <div className="mt-2.5 mb-5 flex items-center">
                                        <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                                            5.0
                                        </span>
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5 text-yellow-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5 text-yellow-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5 text-yellow-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5 text-yellow-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5 text-yellow-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>
                                            <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                                        </p>
                                        <p>
                                            <span className="text-green-500 text-xl font-bold ">5%</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })
                }
            </div>
        </>
    );
}

export default Home
