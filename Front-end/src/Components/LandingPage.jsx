import React from 'react';
import AdminPanel from './AdminPanel';
import { Link } from 'react-router-dom';
import Login from './Login';

function LandingPage() {
    return (
        <>



            {/* // Main div */}
            <main>
                <div className="w-full mb-2">
                    <div className="flex bg-white" style={{ height: 600 }}>
                        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                            <div>
                                <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                                    Feat wear <span className="text-indigo-600">Paradies</span>
                                </h2>
                                <p className="mt-2 text-sm text-gray-500 md:text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                                    commodi cum cupiditate ducimus, fugit harum id necessitatibus odio
                                    quam quasi, quibusdam rem tempora voluptates. Cumque debitis
                                    dignissimos id quam vel!
                                </p>
                                <div className="flex justify-center lg:justify-start mt-6">
                                    <Link to={"/Login"} className="px-4 py-3 bg-gray-900 cursor-pointer text-gray-200 text-xs font-semibold rounded hover:bg-gray-800">
                                        Log in
                                    </Link>
                                    <Link to={"/Admin-Panel"} className="mx-4  px-4 py-3 bg-gray-300 cursor-pointer text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">
                                        Admin panel
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className="lg:block  w-1/2 lg:w-1/2"
                            style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
                        >
                            <div className="h-full relative">
                                <img
                                    alt="Picture of the author"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className=" h-full "
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        objectFit: "cover",
                                        color: "transparent"
                                    }}
                                    sizes="100vw"
                                    // srcSet="/_next/image?url=%2Fwal.avif&w=640&q=75 640w, /_next/image?url=%2Fwal.avif&w=750&q=75 750w, /_next/image?url=%2Fwal.avif&w=828&q=75 828w, /_next/image?url=%2Fwal.avif&w=1080&q=75 1080w, /_next/image?url=%2Fwal.avif&w=1200&q=75 1200w, /_next/image?url=%2Fwal.avif&w=1920&q=75 1920w, /_next/image?url=%2Fwal.avif&w=2048&q=75 2048w, /_next/image?url=%2Fwal.avif&w=3840&q=75 3840w"
                                    src="https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                                <div className="h-full bg-black opacity-25" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default LandingPage;
