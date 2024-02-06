import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AdminPanel from './Components/AdminPanel';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Home_Product_Detail from './Components/Home_Product_Detail';
import Cart from './Components/Cart';
import { LoginShowed, get_data_shoes } from './action/action';
import PendingOrders from './Components/PendingOrders';
import { Pendu_Data_To_Pending } from './action/action';
import Brands from './Components/Brands';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.post("/api/check-token", { token: localStorage.getItem("usertoken") })
      .then((res) => {
        // console.log(res.data);
        dispatch(LoginShowed(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await axios.post("/api/getshoesdata");
        // console.log(response.data);
        dispatch(get_data_shoes(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getdata();
  }, []);

  // fetchinggggggg
  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await axios.post("/api/getpendingorder");
        // console.log(response.data, "fetchinggggg");
        response.data.map((pro) => {
          dispatch(Pendu_Data_To_Pending(pro))
        })
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetching();
  }, []);


  const userloginornot = useSelector((state) => state.Login.Logged_in);

  return (
    <>

      <Header />
      <Routes>
        {userloginornot ? (
          <>
            <Route path='/Home' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Brand' element={<Brands />} />
            <Route path='/Brand/:Brandname' element={<Brands />} />
            <Route path='/Pending-Orders' element={<PendingOrders />} />
            <Route path='/Home/:ProductID' element={<Home_Product_Detail />} />
          </>
        ) : (
          <>
            <Route path='/' element={<LandingPage />} />
            <Route path='/Admin-Panel' element={<AdminPanel />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Registeration' element={<Register />} />
          </>
        )


        }
      </Routes>

      <Footer />
    </>
  );
}

export default App;
