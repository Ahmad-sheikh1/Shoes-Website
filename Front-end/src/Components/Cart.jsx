import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Send_Data } from '../action/action';
import axios from 'axios';

function Cart() {

    const dispatch = useDispatch();

    const [count, setCount] = useState(1);
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    let total;

    let texes = "2";
    let subtotal;

    const Cart_Order = useSelector((state) => state.Login.Cart);
    // console.log(Cart_Order, "lol   ");
    // console.log(...Cart_Order);

    const Senddata = useSelector((state) => state.Login.SendData);
    // console.log(Senddata , "dfdsf");
    if (Senddata) {
        axios.post("/api/PendingOrders" , Senddata).then((res) => {
            console.log(res.data);
        })
    }

    return (
        <>
            <h1 className="text-3xl font-semibold bg-gray-100
            text-center  ">Shopping Cart</h1>

            {


                Cart_Order.map((Product, index) => {
                    total = count * Product.price
                    subtotal = String(Number(texes) + total);
                    return (<div className="bg-gray-100 h-screen py-8">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-3/4">
                                    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                        <table className="w-full">
                                            <thead>
                                                <tr>
                                                    <th className="text-left font-semibold">Product</th>
                                                    <th className="text-left font-semibold">Price</th>
                                                    <th className="text-left font-semibold">Quantity</th>
                                                    <th className="text-left font-semibold">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-4">
                                                        <div className="flex items-center">
                                                            <img
                                                                className="h-16 w-16 mr-4"
                                                                src={Product.img}
                                                                alt="Product image"
                                                            />
                                                            <span className="font-semibold">{Product.productname}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4">${Product.price}</td>
                                                    <td className="py-4">
                                                        <div className="flex items-center">
                                                            <button onClick={decrement} className="border rounded-md py-2 px-4 mr-2">
                                                                -
                                                            </button>
                                                            <span className="text-center w-8">{count}</span>
                                                            <button onClick={increment} className="border rounded-md py-2 px-4 ml-2">
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="py-4">${total}</td>
                                                </tr>
                                                {/* More product rows */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    )
                })


            }
            <div className="md:w-1/4 absolute top-[180px] right-4">
                <div className="bg-white rounded-lg shadow-md p-6  ">
                    <h2 className="text-lg font-semibold mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${total}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>${texes}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>$0.00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">${subtotal}</span>
                    </div>
                    <button
                        onClick={() => dispatch(Send_Data([...Cart_Order]))}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                        Checkout
                    </button>
                </div>
            </div>
        </>

    )
}

export default Cart
