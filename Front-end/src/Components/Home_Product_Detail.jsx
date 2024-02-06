import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Add_To_Cart_Action } from '../action/action';

function Home_Product_Detail() {
    const { ProductID } = useParams();

    const dispatch = useDispatch();
    let S_Data = useSelector((state) => state.Login).shoedata;
    let res = S_Data.find(item => item._id == ProductID);

    const Cart_Orders = useSelector((state) => state.Login).Cart;
    console.log(Cart_Orders);
    return (
        <>

            <div className="w-full pt-16 ">
                <div className=" flex-none tablet:flex-none laptop:flex desktop:flex w-3/4 m-auto ">
                    <div className=" flex w-full mb-8 tablet:mb-8 laptop:mb-0 desktop:mb-0 laptop:w-1/2 desktop:w-1/2 tablet:w-full ">
                        <div className="  bg-green">
                            <img
                                alt="Picture of the author"
                                width={100}
                                height={100}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                loading="lazy"

                                src={res.img}
                            />
                            <img
                                alt="Picture of the author"
                                width={100}
                                height={100}
                                decoding="async"
                                data-nimg={1}
                                className="mt-2"
                                style={{ color: "transparent" }}
                                loading="lazy"
                                src={res.imgT}
                            />
                            <img
                                alt="Picture of the author"
                                width={100}
                                height={100}
                                decoding="async"
                                data-nimg={1}
                                className="mt-2"
                                style={{ color: "transparent" }}
                                loading="lazy"
                                src={res.imgTh}
                            />
                        </div>
                        <div className="  ml-2 ">
                            <img
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                decoding="async"
                                data-nimg={1}
                                className="m-auto"
                                style={{ color: "transparent" }}
                                loading="lazy"
                                src={res.img}
                            />
                        </div>
                    </div>
                    <div className=" ml-0 tablet:ml-16 laptop:ml-16 desktop:ml-16  ">
                        <div>
                            <p className="text-3xl font-semibold">{res.productname}</p>
                        </div>
                        <div>
                            <p className="text-1xl font-semibold">
                                {res.mindetail}
                            </p>
                        </div>
                        <div>
                            {" "}
                            <div>
                                <div className="flex">
                                    <p className="text-1xl font-semibold mb-0 text-gray-500 text-decoration-line-through">
                                        {res.price}
                                    </p>
                                    {/* <p className="text-1xl font-semibold mb-0 text-red-500 ml-2">
                                                Price: $ 61.75
                                            </p> */}
                                </div>
                            </div>
                            <p className="m-0 font-semibold text-slate-500">incl of taxes</p>
                            <p className="font-semibold text-slate-400">
                                (also incl all duty charges)
                            </p>
                        </div>
                        <div className="mt-16">
                            <div>
                                <p className="font-semibold">Select Size</p>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <p className="border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ">
                                    UK 6
                                </p>
                                <p className="border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ">
                                    UK 6.5
                                </p>
                                <p className="border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ">
                                    UK 7
                                </p>
                                <p className="border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ">
                                    UK7.5
                                </p>
                                <p className="border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ">
                                    UK 8
                                </p>
                                <p className="border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ">
                                    UK 8.5
                                </p>
                                <p className="border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ">
                                    UK 9
                                </p>
                                <p className="border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ">
                                    UK 9.5
                                </p>
                                <p className="border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ">
                                    UK 10
                                </p>
                                <p className="border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ">
                                    UK 10.5
                                </p>
                                <p className="border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ">
                                    UK 11
                                </p>
                                <p className="border-2 cursor-pointer border-gray-300 border-solid w-24 h-8 text-center rounded font-semibold m-0 ">
                                    UK 11.5
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <button
                                onClick={() => dispatch(Add_To_Cart_Action(res))}
                                className="w-full cursor-pointer bg-black mb-0 h-10 text-center text-white align-text-bottom pt- rounded-full mt-10">
                                Add to Cart
                            </button>
                        </div>
                        <div>
                            <p className="w-full  mt-2 h-10 text-center cursor-pointer align-text-bottom pt-2 rounded-full border-2 border-black ">
                                Online payment
                            </p>
                        </div>
                        <div className="mt-10">
                            <p className="font-semibold">product details</p>
                            <p className="max-w-[300px]">
                                very comfertable and soft shoes easy to wear and good for walk
                            </p>
                        </div>
                    </div>
                </div >
            </div>

        </>
    )
}

export default Home_Product_Detail;
