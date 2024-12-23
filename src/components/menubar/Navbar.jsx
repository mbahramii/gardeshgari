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
import { FaArrowAltCircleLeft } from "react-icons/fa";
import HomeArticle from "../HomeArticle.jsx";
import SelectedArticles from "../SelectedArticles.jsx";


const Navbar = ({ showModal, setShowModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const phone = localStorage.getItem("phone");
    if (token && phone) setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    if (!showModal) {
      const token = localStorage.getItem("token");
      const phone = localStorage.getItem("phone");
      if (token && phone) setIsAuthenticated(true);
    }
  }, [showModal]);

  const handleSearchToggle = () => setSearch(!search);



  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/user/articles",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch articles");

        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchArticles();
  }, []);


  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredArticles([]);
    } else {
      const filtered = articles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  }, [searchQuery, articles]);

  
  return (
    <div className="w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1040px] flex justify-center gap-2 container mx-auto mt-3">
      <div className="max-w-[290px]">
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
      <nav className=" bg-[#1EB5FF] h-full w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px]  xl:w-[1200px] container mx-auto rounded-xl">
        <div className="bg-white border-2 rounded-sm border-blue-500 flex justify-between items-center md:hidden">
          <div className="flex items-center justify-between mx-2">
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
          <div className="flex items-center justify-end space-x-[3px]">
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost">
              {isOpen ? <X className="w-8 h-8 text-black" /> : <Menu className="w-8 h-8 text-black" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="h-80 md:hidden bg-white" dir="rtl">
            <div className="space-y-5">
              <Input type="text" placeholder="جستجو کنید" className="border-yellow-400 p-2  rounded w-full" />
              <ul className="">
                <li className="flex items-center space-x-2">
                  <span className="text-lg flex  gap-2 ">
                    <img src={download} alt="" />
                    دانلود اپلیکیشن سفرکو
                  </span>
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
                          <Link to="/mytravels"> تجربه سفر من </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}

        {!search ? (
          <div className="hidden md:flex justify-between items-center p-3 md:w-[600px] lg:w-[900px] xl:w-[1161px] md:h-full">
            <div className="flex items-center space-x-1">
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
              <ul className="flex md:justify-end lg:justify-center md:w-[400px] lg:w-[600px] md:gap-[1px] lg:gap-[24px] text-white text-[12px] lg:font-bold lg:text-[16px]">
                <li className="md:w-16 lg:w-[110px]">مقالات گردشگری</li>
                <li className="md:w-[58px] lg:w-[110px]">ایران شناسی</li>
                <li className=" md:w-16 lg:w-[110px]">برنامه ریزی سفر</li>
                <li
                  className="relative"
                  onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <h1 className="text-white md:w-16 lg:w-[110px]">
                    تجربه های سفر
                  </h1>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg">
                      <ul>
                        <li className="hover:bg-gray-300 text-black px-4 py-2">
                          <Link to="/travelexperience"> صفحه تجربیات </Link>
                        </li>
                        <li className="hover:bg-gray-300 text-black px-4 py-2">
                          <Link to="/mytravels"> تجربه سفر من </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div dir="rtl" className="hidden md:h-[92px]  md:w-[600px] lg:w-[900px] xl:w-[1161px] md:flex justify-between items-center mx-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="جستجو"
                className="border p-2 rounded border-gray-700 w-56 bg-white"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button onClick={handleSearchToggle}>بازگشت</Button>
          </div>
        )}

            <div>

        {filteredArticles.map((article) => (
          <HomeArticle
            key={article.id}
            id={article.id}
            title={article.title}
            imageUrl={article.img}
          />
        ))}
      </div>
    
      </nav>
      <img src={logo} alt="Logo" className="hidden md:block w-[85px] h-[85px] rounded-full" />

    </div>
  );
};

export default Navbar;
