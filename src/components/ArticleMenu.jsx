import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiLibreofficewriter } from "react-icons/si";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsBarChartLine, BsBookmarks } from "react-icons/bs";
import { BiSolidHeartCircle } from "react-icons/bi";
import { CiMedal } from "react-icons/ci";
import articlev from "../components/AddArticle/img/article.mp4";





const ArticleMenu = () => {
    const [isFirstMenuOpen, setIsFirstMenuOpen] = useState(true); 
    const [isActive , setIsActive ] = useState ("")
  
    
  const toggleActive = (menuItem) => {
    setIsActive(menuItem)
  }

    return (
        <div>
                 {/* منو موبایل در ارتیکل  */}
                 <div className=" md:hidden" dir="rtl">

                 <div className="flex items-center ">
           
                       <div className="p-4 container mx-auto md:hidden ">
                         <ul className="flex justify-center sm:flex sm:justify-center mt-6 items-center gap-4 w-[200px] sm:w-[500px] container mx-auto  ">
                         <Link to="/mytravels">
                           <div className=" flex my-3" onClick={() => toggleActive("write")}>
                           <SiLibreofficewriter  className={`w-7 h-7 mx-1 text-black  ${isActive === "write" ? 'text-blue-900 ' : ''}`} />
                           </div>
                         </Link>
                         <Link to="/empty1">
                           <div className="flex my-3" onClick={() => toggleActive("experience")}>
                           <FaRegCircleCheck  className={`w-7 h-7 mx-1 text-black  ${isActive === "experience" ? 'text-green-600':''}`}  />
                           </div>
                         </Link>
                         <Link to="/empty1">
                           <div className="flex my-3" onClick={() => toggleActive("chart")}>
                           <BsBarChartLine  className={`w-7 h-7 mx-1 text-black  ${isActive === "chart" ? 'text-yellow-500' : ''}`} />
                           </div>
                         </Link>
                         <Link to="/empty1">
                           <div className="flex my-3" onClick={() => toggleActive("travel")}>
                           <BiSolidHeartCircle className={`w-7 h-7 mx-1 text-black  ${isActive=== "travel" ? 'text-red-900' : ''}`}/>
                           </div>
                         </Link>
                         <Link to="/empty1">
                           <div className="flex my-3" onClick={() => toggleActive("save")}>
                           <BsBookmarks className={`w-7 h-7 mx-1 text-black  ${isActive === "save" ? 'text-amber-950' : ''}`} />
                           </div>
                         </Link>
                         <Link to="/empty1">
                           <div className="flex my-3" onClick={() => toggleActive("mypoint")}>
                           <CiMedal className={`w-7 h-7 mx-1 text-black  ${isActive === "mypoint" ? 'text-blue-600' : ''}`} />
                           </div>
                         </Link>
                         </ul>
                         <div className=" md:hidden">
                     <video width="600" controls>
                     <source src={articlev} type="video/mp4" />
                     مرورگر شما از پخش ویدئو پشتیبانی نمی‌کند.
                     </video>
                   </div>
                       </div>
                    </div>
         
         
                     
               </div> 
                <div className="flex justify-around items-center my-10">
                   <div className=" hidden md:max-w-[400px] md:block md:max-h-[400px]">
                     <video width="600" controls>
                     <source src={articlev} type="video/mp4" />
                     مرورگر شما از پخش ویدئو پشتیبانی نمی‌کند.
                     </video>
                   </div>
               <div dir="rtl" className="flex-col items-start mb-3 rounded-md h-full w-72 bg-white hidden md:block ">
                      <div className="p-4 md:block">
                        <div className="flex flex-col items-center">
                          <img
                            src="https://via.placeholder.com/50"
                            alt="Profile"
                            className="rounded-full"
                          />
                          <p className="mt-2 text-lg font-semibold">Mehdi Karjo</p>
                          <p className="text-black">670 Points</p>
                        </div>
                        <ul className="mt-2 no-underline ">
                        <Link to="/mytravels" >
                          <div  onClick={() => toggleActive("write")} 
                          className={` over:bg-[#9DDAF9] hover:rounded-md flex items-center my-7  no-underline text-black  ${isActive === "write" ? 'text-blue-900 ' : ''}`} >
                          <SiLibreofficewriter  className={`w-10 h-10 `} />
                              <li className={` p-2 border-b border-gray-300 text-[20px] `} >نوشتن تجربه جدید سفر</li>
                          </div>
                              </Link>
         

                              <Link to="/empty1">
                          <div 
                          onClick={() => toggleActive("experience")} 
                          className= {`hover:bg-[#9DDAF9] hover:rounded-md flex items-center my-7  text-black  ${isActive === " experience" ? 'text-red-600':''} `} 
                          >
                          <FaRegCircleCheck  className={`w-6 h-6 `}  />
                            <li className={` p-2 border-b border-gray-300 `}>تجربیات منتشر شده </li> 
                          </div>
                              </Link>
         
                              <Link to="/empty1">
                          <div
                          onClick={() => toggleActive("chart")} 
                          className= {` hover:bg-[#9DDAF9] hover:rounded-md flex items-center my-7 text-black   ${isActive === "chart" ? 'text-yellow-500' : ''} `} 
                          >
                          <BsBarChartLine  className={`w-7 h-7 `} />
                            <li className=" p-2 border-b border-gray-300 text-[20px]">امار بازدید مقاله</li>
                          </div>
                              </Link>
         
                              <Link to="/empty1">
                          <div
                            onClick={() => toggleActive("travel")}
                            className={` hover:bg-[#9DDAF9] hover:rounded-md flex items-center my-7 text-black   ${isActive=== "travel" ? 'text-red-900' : ''} `}
                            >
                          <BiSolidHeartCircle className={`w-7 h-7 `}/>
                            <li className=" p-2 border-b border-gray-300  text-[20px]">سفر های پیشنهادی</li>
                          </div>
                                </Link>
         

                                <Link to="/empty1">
                          <div 
                          className= {` hover:bg-[#9DDAF9] text-black hover:rounded-md flex items-center my-7 ${isActive === "save" ? 'text-blue-950' : ''} `}
                          onClick={() => toggleActive("save")}
                          >
                          <BsBookmarks className={`w-7 h-7   `} />
                            <li className=" p-2 border-b border-gray-300 text-[20px]">ذخیره مقالات </li>
                          </div>
                               </Link>


                                  <Link to="/empty1">
                          <div
                           onClick={() => toggleActive("mypoint")}
                           className= {` hover:bg-[#9DDAF9] text-black hover:rounded-md flex items-center my-7   ${isActive === "mypoint" ? 'text-blue-600' : ''} `}
                           >
                          <CiMedal className={`w-7 h-7 `} />
                            <li className=" p-2 border-b border-gray-300  text-[20px]">امتیازات من</li>
                          </div>
                               </Link>
                        </ul>
                      </div>
                            </div> 
                    </div>

                    </div>
                    )
}

export default ArticleMenu;