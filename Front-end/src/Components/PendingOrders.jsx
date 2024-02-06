import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';

function PendingOrders() {
    // useEffect(() => {
    //     const fetching = async () => {
    //        const responce = await axios.post("/api/getpendingorder");
    //        console.log(responce.data , "fetchinggggg");
    //     }
    // }, [])

    const data = useSelector((state) => state.Login).ToPending;
    console.log(data);
    return (
        <>
            {
                data.map((product) => {
                    return (
                        <div key={product._id} className="flex border-b-2 border-gray-300 mb-1 ">
                            <img
                                alt="Picture of the author"
                                loading="lazy"
                                width={90}
                                height={90}
                                decoding="async"
                                data-nimg={1}
                                className="m-2"
                                // srcSet="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct6main.avif%3Falt%3Dmedia%26token%3D1926d8ed-373d-4989-9462-a9d2e1f0ccd4&w=96&q=75 1x, /_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct6main.avif%3Falt%3Dmedia%26token%3D1926d8ed-373d-4989-9462-a9d2e1f0ccd4&w=256&q=75 2x"
                                src={product.Image}
                                style={{ color: "transparent" }}
                            />
                            <div className="mt-2 ml-2 w-full">
                                <div className="flex  w-full ">
                                    <p className="text-xl font-semibold tracking-wider mb-0  subpixel-antialiased">
                                        {product.Name}
                                    </p>
                                    <p className="text-slate-900  text-lg m-auto mb-2"> Price : ${product.Price}</p>
                                </div>
                                <div className="flex justify-between">

                                    <div>
                                        <p className=" font-semibold hover:text-gray-950 border-2 border-yellow-400 text-yellow-400 cursor-pointer rounded p-1">
                                            Pending
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}

export default PendingOrders;