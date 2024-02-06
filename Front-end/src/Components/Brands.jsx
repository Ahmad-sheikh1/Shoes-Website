import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';


function Brands() {


    let [searchkeyword, Setsearchkeyword] = useState("");
    let searchedproduct = (e) => {
        Setsearchkeyword(pv => pv = e.target.value);
    }

    const Brands = useSelector((state) => state.Brands).Brands;

    // /Brand/:Brandname
    let { Brandname } = useParams();

    const ShoesData = useSelector((state) => state.Login.shoedata).filter((product) => {
        return product.catagory == Brandname 
    }).filter((prd) => {
        if ((prd.productname.toLowerCase()).includes(searchkeyword.toLocaleLowerCase())) {
            return true
        }
        else return false
    });

    console.log(ShoesData);



    return (
        <>
            <div className="mx-auto mt-5 mb-5 w-screen max-w-screen-md  leading-6">
                <form
                    // onSubmit={handleSubmit(searchedproduct)} 
                    className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg">

                    <svg className="absolute left-2 block h-5 w-5 text-gray-400" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" >
                        <circle cx={11} cy={11} r={8} className="" />
                        <line x1={21} y1={21} x2="16.65" y2="16.65" className="" />
                    </svg>
                    <input
                        // {...register("search")}
                        type="name"
                        className="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
                        placeholder="Search Product"
                        onChange={(e) => {
                            searchedproduct(e)
                            // e.preventDefault()
                        }}

                    />
                    <button
                        type="submit"
                        className="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"

                    >
                        Search
                    </button>
                </form>
            </div>


            {/* sidebar */}


            <section className=" flex  md:container py-5 md:pl-10 ">
                <aside className="fixed z-50 md:relative">
                    {/* Sidebar */}
                    <input type="checkbox" className="peer hidden" id="sidebar-open" />
                    <label
                        className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden"
                        htmlFor="sidebar-open"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>
                    <nav aria-label="Sidebar Navigation" className="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden shadow-lg text-white transition-all md:h-screen md:w-64 lg:w-72">

                        <ul className=" space-y-3">
                            <li className="relative">
                                <p className="focus:bg-slate-600 sm:text-xl font-bold  flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">

                                    Brands
                                </p>
                            </li>
                            {
                                Brands.map((brand, indx) => {
                                    return (
                                        <li className="relative" key={indx}>
                                            <button className="text-black  flex w-full space-x-2 rounded-md px-10 py-4 font-semibold focus:outline-none">

                                                <NavLink to={"/Brand/" + brand.name} className="">{brand.name}</NavLink>
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </aside>
                {/* /Sidebar */}
                <div className="flex h-full w-full flex-col">
                    <div className="flex flex-wrap  pl-10 ">
                        <h1 className="text-left text-4xl  font-semibold  ">{Brandname} </h1>
                        <p className="text-3xl text-slate-200 font-semibold ml-10 laptop:inline desktop:inline tablet:inline ">Check our new product</p>
                    </div>
                    {/* Main */}
                    <div className="h-full overflow-hidden pl-10">
                        <div className="flex flex-wrap justify-center">
                            <div className="flex flex-wrap justify-center">

                                {
                                    ShoesData.map((product, indx) => {
                                        return (
                                            <div key={product._id} className="relative m-7 w-full max-w-[245px] overflow-hidden rounded-lg bg-white shadow-md" >

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
                                            </div>
                                        );
                                    })
                                }
                            </div>

                        </div>
                    </div>
                    {/* /Main */}
                </div>
            </section>



        </>
    )
}

export default Brands
