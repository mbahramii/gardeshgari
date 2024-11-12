import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '../ui/button';
import sad from "./img/sad.svg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// کامپوننت لاگ اوت باعث حذف توکن و شماره در لوکال استورج میشود 
function LogoutConfirmation() {
  const [showPopup, setShowPopup] = useState(true);

  const handleLogout = () => {
    toast.success("شما خارج شدید!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // پاک کردن لوکال استورج 
    localStorage.clear();
    setShowPopup(false);

    setTimeout(() => {
      Navigate("/");
      window.location.reload();
    }, 3000); 
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <ToastContainer />
      <div className="bg-white w-[300px] p-6 rounded-lg shadow-lg text-center">
        
        <img src={sad} alt="" />
        
        <p className="text-lg mb-6">واقعا از حساب کاربری خودت می‌خوای خارج بشی؟</p>
        
        <div className="flex justify-between">
          <Link to="/">  
            <Button
              onClick={handleLogout}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              بله
            </Button>
          </Link>
          
          <Link to="/profile" className="flex items-center">
            <Button
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
            >
              خیر
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogoutConfirmation;
