

import React from "react";
import logo from "../menubar/imgmenu/Logo.svg"
import Instagram  from "./imgfooter/Instagram.png";
import  Linkedin  from "./imgfooter/Linkedin.png";
import telegram from "./imgfooter/Telegram.png"
import { Input } from "@/components/ui/input";
import picture from "./imgfooter/picture.png"
import picture1 from "./imgfooter/picture1.png"
import picture2 from "./imgfooter/picture2.png"
import picture3 from "./imgfooter/picture3.png"
import telegramm from "./imgfooter/labtop/Telegram.png"
import Instagramm from "./imgfooter/labtop/Instagram.png"
import Linkedinn from "./imgfooter/labtop/Linkedin.png"
import picturee from "./imgfooter/labtop/picturee.png"
import picture11 from "./imgfooter/labtop/picture11.png"
import picture22 from "./imgfooter/labtop/picture22.png"
import picture33 from "./imgfooter/labtop/picture33.png"
import foter from "./imgfooter/photosfoter.png"


const Footer = () => {
  return (

    <footer className= " bg-teal-900 text-white py-10">
        <div className=" relative max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] container mx-auto bg-gray-500">
          <img className="opacity-40" src={foter} alt="" />
          <h1 className=" absolute top-[56px] left-[40px] text-white text-[20px] sm:top-[100px] sm:left-[45px] sm:text-[45px] md:top-[40%] md:left-[5%] md:text-[55px] lg:top-[40%] lg:left-[17%]">
            همه جای ایران سرای من است

          </h1>
      </div>
      {/* سایز مویابل  */}
      <div className="block md:hidden">
        <div className="block md:hidden">
          <div className="flex justify-around items-center mb-7">
              <div className="flex flex-col gap-1">
                <h5 className="text-[#1BE6E3]">: شبکه های اجتماعی ما  </h5>
                <div className="flex justify-center gap-1">
                  <a href="#"><img src={Instagram} alt="" /></a>
                  <a href="#"><img src={Linkedin} alt="" /></a>
                  <a href="#"><img src={telegram} alt="" /></a>
                </div>
              </div>
              <div className="flex items-center">
                <h3 className=" m-1 text-[8px]">کشف کنید، تجربه کنید</h3>
                <img className="m-1 w-[35px] h-[35px] lg:w-[79px] lg:h-[79px]" src={logo} alt="logo" />
              </div>
           </div>

        <div className="flex justify-center gap-5 text-[8px]">
            
            <div className="max-w-[110px] flex flex-col items-center gap-3 text-center">
              <h5 className="text-[#1BE6E3] font-bold text-lg">خدمات سریع</h5>
              <ul className="tracking-tighter	 text-[12px]">
                <li className="hover:text-gray-300 cursor-pointer my-8">بازگشت به صفحه اصلی</li>
                <li className="hover:text-gray-300 cursor-pointer my-8">دانلود نسخه اپلیکیشن</li>
                <li className="hover:text-gray-300 cursor-pointer my-8">مقالات گردشگری</li>
                <li className="hover:text-gray-300 cursor-pointer my-8">تجربه های سفر</li>
                <li className="hover:text-gray-300 cursor-pointer my-8">برنامه ریزی سفر</li>
                <li className="hover:text-gray-300 cursor-pointer my-8">ایران شناسی</li>
              </ul>

            </div>

            <div className="max-w-[100px]  flex flex-col items-center gap-3 text-center">
              <h5 className="text-[#1BE6E3] font-bold text-lg">ارتباط با ما</h5>
              <ul className="text-[12px]">
                <li className="hover:text-gray-300 cursor-pointer my-8">تماس با پشتیبانی</li>
                <li className="hover:text-gray-300 cursor-pointer my-8">موقعیت مکانی ما</li>
                <li className="hover:text-gray-300 cursor-pointer my-8">حریم خصوصی</li>
                <li className="hover:text-gray-300 cursor-pointer my-8">ارسال تیکت</li>
              </ul>
            </div>
            <div className="max-w-[100px] flex flex-col items-center gap-3 text-center">
              <h5 className="font-bold text-[#1BE6E3] text-lg">پروفایل کاربری</h5>
              <ul className=" text-[12px]">
                <li className="hover:text-gray-300 cursor-pointer my-8">ویرایش پروفایل</li>
                <li className="hover:text-gray-300 cursor-pointer my-8">اعلان ها</li>
                <li className="hover:text-gray-300 cursor-pointer my-8">تیکت های من</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="" dir="rtl">
        <h3 className="text-[#1BE6E3] font-bold text-[12px] m-5">عضویت در خبرنامه ما</h3>
        <h6 className="m-5 text-[10px]">(: با عضو شدن در خبرنامه از اخبار گردشگری ما جا نمون </h6>
        </div>
        <div dir="rtl" className="m-5">
          <Input type="email" placeholder="ایمیل خودرا وارد کنید " className="bg-teal-900 rounded-sm border-white h-8 w-[200px]" />
        </div>

        <div className="flex items-center justify-around mt-7" dir="rtl">
          <p className="w-[190px] text-[8px] p-3">تمامی حقوق این وبسایت متعلق به سفرکو است
           و هر گونه کپی برداری مطالب با ذکر منبع بلامانع است
           .
          </p>
          <div className="flex gap-2 ">
            <img src={picture} alt="" />
            <img src={picture1} alt="" />
            <img src={picture2} alt="" />
            <img src={picture3} alt="" />
          </div>
        </div>
      </div>    


      {/*برای سایز لارج  */}

    <div className="hidden md:flex justify-center max-w-[1200px] container mx-auto ">
      <div className="flex">
        <div className="flex flex-col justify-around">
                        <div className="flex  justify-center gap-5 text-[8px]">
            

                          <div className="max-w-[180px] flex flex-col items-center gap-3 text-center">
                            <h5 className="text-[#1BE6E3] font-bold text-lg">خدمات سریع</h5>
                            <ul className=" text-[18px]">
                              <li className="hover:text-gray-300 cursor-pointer my-8">بازگشت به صفحه اصلی</li>
                              <li className="hover:text-gray-300 cursor-pointer my-8">دانلود نسخه اپلیکیشن</li>
                              <li className="hover:text-gray-300 cursor-pointer my-8">مقالات گردشگری</li>
                              <li className="hover:text-gray-300 cursor-pointer my-8">تجربه های سفر</li>
                              <li className="hover:text-gray-300 cursor-pointer my-8">برنامه ریزی سفر</li>
                              <li className="hover:text-gray-300 cursor-pointer my-8">ایران شناسی</li>
                            </ul>
                          </div>

          
                          <div className="max-w-[180px]  flex flex-col items-center gap-3 text-center">
                            <h5 className="text-[#1BE6E3] font-bold text-lg">ارتباط با ما</h5>
                            <ul className="text-[18px]">
                              <li className="hover:text-gray-300 cursor-pointer my-8">تماس با پشتیبانی</li>
                              <li className="hover:text-gray-300 cursor-pointer my-8">موقعیت مکانی ما</li>
                              <li className="hover:text-gray-300 cursor-pointer my-8">حریم خصوصی</li>
                              <li className="hover:text-gray-300 cursor-pointer my-8">ارسال تیکت</li>
                            </ul>
                          </div>
                          <div className="max-w-[180px] flex flex-col items-center gap-3 text-center">
                            <h5 className="font-bold text-[#1BE6E3] text-lg">پروفایل کاربری</h5>
                            <ul className=" text-[18px]">
                              <li className="hover:text-gray-300 cursor-pointer my-8">ویرایش پروفایل</li>
                              <li className="hover:text-gray-300 cursor-pointer my-8">اعلان ها</li>
                              <li className="hover:text-gray-300 cursor-pointer my-8">تیکت های من</li>
                            </ul>
                          </div>
                        </div>  
            
            <div className="flex  gap-4">
              <img className=" max-w-[89px] max-h-[89px]" src={picturee} alt="" />
              <img className="max-w-[89px] max-h-[89px]"   src={picture11} alt="" />
              <img className="max-w-[89px] max-h-[89px]"  src={picture22} alt="" />
              <img className="max-w-[89px] max-h-[89px]"  src={picture33} alt="" />
            </div>
        </div>    
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-4 my-10">
                <h1 className="font-bold text-[18px]">
                ! کشف کنید، تجربه کنید
                </h1>
                <img src={logo} alt="" className="w-[60px] h-[60px]" />
              </div>
                        <p dir="rtl" className="text-[16px] w-[360px] my-4"> 
                          (
                          <span className="text-[#1BE6E3]">
                    سفرکو
                          </span>
                    )
                        یک پلفترم بزرگ شناخت جاذبه های گردشگری است.هدف ما از این کار شناخت تمامی نقاط گردشگری ایران و معرفی آن به تمام مردم ایران و حتی جهان است ، تا به صنعت گردشگری ایران کمک کنیم.


                    </p>
                        <div className="flex flex-col gap-1 my-5">
                          <h5 className="text-[#1BE6E3] font-bold text-[20px] mb-5 ">: شبکه های اجتماعی ما  </h5>
                          <div className="flex justify-center gap-3 ">
                            <a  className="w-[36px] h-9 " href="#"><img src={Instagramm} alt="" /></a>
                            <a className="w-[36px] h-9 " href="#"><img src={Linkedinn} alt="" /></a>
                            <a className="w-[36px] h-9 " href="#"><img src={telegramm} alt="" /></a>
                          </div>
                          <div>
              <div className="" dir="rtl">
              <h3 className="text-[#1BE6E3] font-bold text-[24px] m-5">عضویت در خبرنامه ما</h3>
              <h6 className="m-5 text-[16px]">(: با عضو شدن در خبرنامه از اخبار گردشگری ما جا نمون </h6>
              </div>
              <div dir="rtl" className="m-5">
                <Input type="email" placeholder="ایمیل خودرا وارد کنید " className="bg-teal-900 rounded-sm border-white h-8 w-[200px]" />
              </div>
            </div>
                        </div>

            </div>
          </div>
          <div>
       
            <div></div>
          </div>

    </footer>
  );
};

export default Footer;
