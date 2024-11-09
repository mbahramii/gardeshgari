import React, { useState, useEffect } from "react";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { HiTicket } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CompleteProfileModal from "../components/CompleteProfileModal/CompleteProfileModal";

function SidebarMenu({
  showCompleteProfileModal,
  setShowCompleteProfileModal,
  checkProfileCompletion,
}) {
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setUserData(data.data); 
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleMenuItemClick = async (to) => {
    await checkProfileCompletion();
    if (showCompleteProfileModal) {
      setShowCompleteProfileModal(true);
    } else {
      navigate(to);
    }
  };


  // هندل کردن ایتم منو و ایکون ها و رنگ هنگام فعال بودن 
  const MenuItem = ({ icon, label, to, activeColor }) => {
    const isActive = location.pathname === to;
    return (
      <div
        onClick={() => handleMenuItemClick(to)}
        className={`flex items-center cursor-pointer ${
          isActive ? `${activeColor} bg-opacity-20 bg-accent-200` : "text-gray-600"
        } justify-center md:justify-start rounded-lg p-2`}
      >
        <div className="flex justify-center items-center p-2">
          {React.cloneElement(icon, {
            className: `${isActive ? activeColor : ""} transition-all duration-300 w-6 h-6`,
          })}
        </div>
        <span className="hidden md:inline-block ml-4 text-nowrap">{label}</span>
      </div>
    );
  };

  return (
    <div className="ml-5 my-5 " dir="rtl">
      {/* در صورت کامل نبودن پروفایل کاربر نمیتواند از بخش ها استفاده کند و مدال نشان داده شود  */}
      {showCompleteProfileModal && (
        <CompleteProfileModal 
          showCompleteProfileModal={showCompleteProfileModal}
          setShowCompleteProfileModal={setShowCompleteProfileModal}
        />
      )}
      <div className="p-2 bg-white rounded-lg shadow-lg">
        <div className="hidden md:flex flex-col items-center mt-16">
          <Avatar className="mb-4">
            <AvatarImage
              src={
                userData && userData.avatar
                  ? userData.avatar
                  : "https://via.placeholder.com/150"
              }
              alt="Profile"
            />
          </Avatar>
          <h3 className="text-lg font-medium text-gray-700">
            {userData ? userData.name : "کاربر مهمان"}
          </h3>
        </div>
        <div className="flex justify-around md:flex-col md:space-y-6">
          <MenuItem
            icon={<IoPersonCircleOutline />}
            label="ویرایش پروفایل"
            to="/profile"
            activeColor="text-accent-600"
          />
          <MenuItem
            icon={<FaBell />}
            label="اعلان ها"
            to="/empty1"
            activeColor="text-secondary-500"
          />
          <MenuItem
            icon={<HiTicket />}
            label="تیکت ها"
            to="/profile/tickets"
            activeColor="text-primary-700"
          />
          <MenuItem
            icon={<CiLogout />}
            label="خروج از حساب کاربری"
            to="/log"
            activeColor="text-state-error-red2"
          />
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
