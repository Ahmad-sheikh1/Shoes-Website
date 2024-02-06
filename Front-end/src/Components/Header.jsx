import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../action/action';

function Header() {
    const dispatch = useDispatch();
    const Logged_User = useSelector((state) => state.Login?.Logged_in);

    const logoutfunc = () => {
        token: localStorage.removeItem("usertoken")
        dispatch(Logout());
    }

    return (
        <>
            <div className="bg-white shadow mb-2 px-4 py-4">
                <div className="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden md:mx-auto md:flex-row md:items-center">
                    <Link to={"/"} className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
                        <img src="https://shoe-paradies.vercel.app/_next/image?url=%2Faddidas.jpg&w=96&q=75" alt="" />
                    </Link>
                    <input type="checkbox" className="peer hidden" id="navbar-open" />
                    <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <div className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-8 md:max-h-full md:flex-row md:items-start">
                        <div>
                            {Logged_User ?
                                (<ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                                    <li className=" md:mr-5">
                                        <NavLink to="/Home">Home</NavLink>
                                    </li>
                                    <li className="md:mr-5">
                                        <Link to="/Pending-Orders">Pending Orders</Link>
                                    </li>
                                    <li>
                                        <Link to="/Brand">Brands</Link>
                                    </li>
                                    <div
                                        id="dropdownHover"
                                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                    >
                                        <ul
                                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownHoverButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Earnings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>)
                                : (<ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                                    <li className=" md:mr-5">
                                        <NavLink to="/Admin-Panel">Admin Panel</NavLink>
                                    </li>
                                    <li className="md:mr-5">
                                        <NavLink to="/Registeration">Register</NavLink>
                                    </li>
                                </ul>)
                            }
                        </div>
                        <div>
                            <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                                {Logged_User ?
                                    (<li className="font-bold md:mr-5 cursor-pointer">
                                        <a onClick={logoutfunc}>
                                            Logout
                                        </a>
                                    </li>)
                                    : null
                                }
                                {Logged_User === null ?
                                    (<li className="font-bold md:mr-5">
                                        <Link to={"/Login"}>Login</Link>
                                    </li>)
                                    : null
                                }

                                <li className="md:mr-5">
                                    <Link >
                                        <span href="#">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                                <path fillRule="evenodd" clipRule="evenodd" d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="currentColor" />
                                                <path d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                                <li className="md:mr-5">
                                    <Link to={"/Cart"}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z" fill="currentColor" /></svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
