import { useState, useEffect } from "react";
import { Download, LogIn, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "./imgmenu/Logo.svg";
import { Link } from "react-router-dom";
import Modal from "../SingalModal1/SingInModal1.jsx";
import { CiSearch } from "react-icons/ci";
import download from "./imgmenu/mobiledonload.svg"
import document from "./imgmenu/documenttext.svg"
import map from "./imgmenu/map.svg"
import vector from "./imgmenu/Vector.svg"
import smileeyes from "./imgmenu/smileys.svg"


const Navbar = ({ showModal, setShowModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [search, setSearch] = useState(false);
  const [buttton , setButtton ] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // بررسی احراز هویت کاربر با استفاده از توکن و تلفن ذخیره شده در localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const phone = localStorage.getItem("phone");
    if (token && phone) setIsAuthenticated(true);
  }, []);
  // اگر مودال بسته شده باشد، دوباره احراز هویت را بررسی می‌کند
  useEffect(() => {
    if (!showModal) {
      const token = localStorage.getItem("token");
      const phone = localStorage.getItem("phone");
      if (token && phone) setIsAuthenticated(true);
    }
  }, [showModal]);

  // دکمه برای ایجاد گزینه سرچ 
  
  const handleSearchToggle = () => setSearch(!search);


  return (
    <div className="w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1270px] flex gap-2 container mx-auto mt-3">
      <div className="max-w-[290px]">
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
      <nav className=" bg-[#1EB5FF] h-full w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px]  xl:w-[1200px] container mx-auto rounded-xl">
        
        <div className="bg-white border-2 rounded-sm border-blue-500 flex justify-between items-center md:hidden">
          <div className="flex items-center justify-start mx-2">
            {/* اگر کاربر احراز هویت شده، لینک پروفایل نمایش داده می‌شود؛ در غیر این صورت، دکمه ثبت‌نام */}
            {isAuthenticated ? (
              <Link to="/profile" className="bg-[#1EB5FF] border-yellow-400 text-yellow-400 px-4 py-2 rounded">
                پروفایل
              </Link>
            ) : (
              <Button className="bg-orange-400 text-white px-4 py-2 rounded" onClick={() => setShowModal(true)}>
                ثبت نام
              </Button>
            )}
          </div>
          <div className="flex justify-center items-center">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          </div>

          {/* دکمه باز و بسنه کردن منو موبایل  */}
          <div className="flex items-center justify-end space-x-[3px]">
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost">
              {isOpen ? <X className="w-8 h-8 text-black" /> : <Menu className="w-8 h-8 text-black" />}
            </Button>
          </div> 
        </div>


        {/* منوی موبایل در حالت باز */}
        {isOpen && (
          <div className="h-80 md:hidden bg-white" dir="rtl"> 
            <div className="space-y-5">
              <Input type="text" placeholder="جستجو کنید" className="border-yellow-400 p-2  rounded w-full" />
              <ul className="">
                <li className="flex items-center space-x-2">
                  <span className="text-lg flex  gap-2 ">
                    <img src={download} alt="" />
                    دانلود اپلیکیشن سفرکو</span>
                </li>
                <Link className="hover:text-blue-900 flex items-center space-x-2  mt-8 gap-2 " to="/AArticle">
                <img src={document} alt="" />
                  مقالات گردشگری
                </Link>
                <Link className="hover:text-blue-900 flex items-center space-x-2 mt-8  gap-2 " to="/AArticle">
                <img src={map} alt="" />
                  ایران شناسی
                </Link>
                <Link className="hover:text-blue-900 flex items-center space-x-2 mt-8  gap-2 " to="/AArticle">
                <img src={vector} alt="" />
                  برنامه ریزی سفر
                </Link>
                <li
                  className="relative mt-8"
                  onClick={() => setDropdownOpen(!dropdownOpen)}>
                <h1 className="hover:text-blue-900 flex items-center space-x-2 mt-8  gap-2 " to="/AArticle">
                <img src={smileeyes} alt="" />
                  تجربه های سفر
                </h1>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg">
                      <ul>
                        <li className="hover:bg-gray-300 text-black px-4 py-2">
                          <Link to="/travelexperience"> صفحه تجربیات </Link>
                        </li>
                        <li className="hover:bg-gray-300 text-black px-4 py-2">
                          <Link  to="/myexperience" > تجربه سفر من </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>

            </div>
          </div>
        )}
          {/* نمایش فرم جستجو در صورت فعال بودن */}

        {!search ? (
          <div className="hidden md:flex justify-between items-center p-3 lg:w-[1000px] xl:w-[1090px] md:h-full">
            <div className="flex items-center space-x-4">
              <Button className="bg-[#FF8F00] text-white px-4 py-2 rounded">دانلود اپلیکیشن</Button>
              {isAuthenticated ? (
                <Button variant="outline" className="bg-[#1EB5FF] border-yellow-400 text-yellow-400 px-4 py-2 rounded">
                  <Link to="/profile">پروفایل</Link>
                </Button>
              ) : (
                <Button className="bg-orange-400 text-white px-4 py-2 rounded" onClick={() => setShowModal(true)}>
                  ثبت نام
                </Button>
              )}
            </div>

            <Button className="bg-[#1EB5FF] w-24 my-4 flex gap-2 " onClick={handleSearchToggle}>
              <CiSearch className="w-5 h-5 " />
              جستجو
            </Button>
            <div dir="rtl" className="">
              <ul className="flex justify-center space-x-4 w-[600px] gap-[24px] text-white text-[12px] lg:font-bold lg:text-[16px]">
                <li className="ml-4" >مقالات گردشگری</li>
                <li className="ml-4">ایران شناسی</li>
                <li className="ml-4">برنامه ریزی سفر</li>
                 <li
                  className="relative ml-4"
                  onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <h1 className="text-white" >
                    تجربه های سفر
                  </h1>
                  {/* وقتی روی گزینه تجربه های سفر میزنیم یه دوتا گزینه بصورت منو کشویی باز میشه  */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg">
                      <ul>
                        <li className="hover:bg-gray-300 text-black px-4 py-2">
                          <Link to="/travelexperience"> صفحه تجربیات </Link>
                        </li>
                        <li className="hover:bg-gray-300 text-black px-4 py-2">
                          <Link  to="/myexperience" > تجربه سفر من </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div dir="rtl" className="hidden md:h-[92px] md:flex justify-between items-center mx-3">
            <Input type="text" placeholder="جستجو" className="border p-2 rounded border-gray-700 w-60 bg-white " />
            <Button onClick={handleSearchToggle}>بازگشت</Button>
          </div>
        )}
      </nav>
      <img src={logo} alt="Logo" className="hidden md:block w-[85px] h-[85px] rounded-full" />
    </div>
  );
};

export default Navbar;
