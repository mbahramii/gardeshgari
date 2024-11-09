import Navbar from "../../components/menubar/Navbar";
import Languag from "../../components/languag/Languag";
import logo from "./imgaboutus/Logo.svg";
import cooperation from "./imgaboutus/title-logo.png";
import arrow from "./imgaboutus/arrowvector.svg";
// import cooperation from "../Aboutus/imgaboutus/cooperation.png"
import cooperati from "./imgaboutus/cooperation.png";
import letterbox from "./imgaboutus/letterbox.png";
import { FiPhoneCall } from "react-icons/fi";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
// import { Link } from "lucide-react";
import { Link } from "react-router-dom";
import socialmedia from "./imgaboutus/socialmedia.svg"
import arrowvector from "./imgaboutus/arrowvector.png"
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Button } from "../../components/ui/button";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import arrowv from "./imgaboutus/arrowvectorrr.png"
import map from "./imgaboutus/map.svg"
import jahad from "./imgaboutus/jahad.svg"
import rahnemaii from "./imgaboutus/rahnemaii.svg"
import sazman from "./imgaboutus/sazman.svg"
import { AiFillHeart } from "react-icons/ai";
import Footer from "../../components/footer/Footer";
// import Footer from "../../components/footer/footer";
import React from "react";


const Aboutus =() => {
        

    return(
        <div className="flex flex-col  sm:w-[1220px] sm:container sm:mx-auto">
            <div className="text-start">
            <Languag /> 
            </div>
        <div className="flex justify-end gap-2 p-2 w-[300px] sm:w-[600px] container mx-auto md:w-[1000px]">
            <h1 className="text-[10px] text-gray-400">
                صفحه اصلی 
                &gt;
                درباره ما 
            </h1>
        </div>

        <div className="flex justify-center items-center my-8 container sm:max-w-[1200px] sm:mx-auto">
            <div className="flex flex-col items-center w-[90px] sm:w-[330px] ">
                <img src={logo} alt="" className="h-[79px] w-[79px] sm:w-[210px] sm:h-[210px]" />
                <h1 className="font-bold text-[10px] text-center mt-2 sm:text-[20px]">
                    کشف کنید، تجربه کنید 
                </h1>
            </div>
            <div className="text-right">
                <p className="w-[211px] text-[10px]  md:text-[26px] md:w-[400px] lg:w-[700px] ">
                سفرکو یک پلفترم بزرگ شناخت جاذبه های گردشگری است هدف ما شناخت تمامی نقاط گردشگری ایران و معرفی آن به تمام مردم ایران و حتی جهان است ، با توجه به اینکه صنعت گردشگری در ایران از رونق کافی برخوردار نمیباشد بخاطر مسائل سیاسی و... سعی ما بر این است که جاذبه های مختلف ایران را به مردم ایران و جهان معرفی  کنیم، همچنین برنامه ریزی دقیق برای سفر و تمامی نیاز های که هر فرد  برای مسافرت نیاز دارد از اهداف مهم ما است.
                </p>
            </div>
        </div>

        <div className="flex flex-col justify-center container mt-12">
            <div className="flex justify-center gap-2 mb-5">
            <h1 className="text-[20px] font-bold text-center md:text-[40px] ">
            سازمان های همکار با ما
            </h1>
                <img src={cooperati} alt="" />
            </div>
            <div className="flex justify-center items-center">
                <img className="w-[76px] h-[86px] md:w-[170px] md:h-[200px] " src={jahad} alt="" />
                <img className="w-[76px] h-[86px] md:w-[180px] md:h-[200px] " src={sazman} alt="" />
                <img className="w-[76px] h-[86px] md:w-[210px] md:h-[210px] " src={rahnemaii} alt="" />
            </div>
            <div className="w-[125px] container mx-auto my-3 ">
                <img src={arrow} alt="" />
            </div>
        </div>
            <div className="flex flex-col justify-center">
                <div className="flex justify-center">

                    <h1 className="font-bold text-[20px] md:text-[40px] ">
                    راه های ارتباط با ما
                    </h1>
                    <img src={letterbox} alt="" />
                </div>
                <div className="bg-[#8FFFF6] text-[#0E453A] w-[309px] h-[70px] rounded-sm  border-[#047C81] border-[1px] flex justify-center  items-center gap-4 container mx-auto text-[12px] md:w-[550px] md:h-[141px] md:text-[24px] ">
                                            
                        <Link className="flex items-center">
                            <h1 className="text-[12px] md:text-[20px]">
                            ارسال تیکت به پشتیبانی
                            </h1>
                            <BsFillTicketPerforatedFill />
                        </Link>
                        <Link className="flex items-center text-[12px] md:text-[20px]">
                            <h1>
                            شماره تماس:۷۳۶۳۲۲-۰۲۱
                            </h1>
                            <FiPhoneCall className="text-[#0E453A]"/>
                        </Link>
                </div>
                <div className="w-[147px] container mx-auto my-2">
                <img src={arrowvector} alt="" />
                </div>
                <div className="W-[246px] text-center flex justify-center items-center">
                    <h1 className="font-bold text-[20px] w-[187px] md:text-[40px] md:w-[550px] ">
                        آدرس ما در شبکه های اجتماعی 
                    </h1>
                    <img className="w-[51px] h-[51px] md:w-[115px] md:h-[115px]" src={socialmedia} alt="" />
                </div>
                <div className="flex justify-center items-center gap-3 container mx-auto w-[308px] md:w-[900px] ">
                    
                    < Button  className="w-[92px] h-[42px] bg-[#E6E6E6] border-[1px] rounded-sm border-[#B7B7B7] m-1  md:w-[220px]  md:h-[90px] md:rounded-md"  
                    onClick={() => window.open('https://t.me/yourTelegramUsername', '_blank')}
                    >
                        <h1 className="font-bold text-[12px] text-black md:text-[20px]">
                        لینکدین 
                        </h1>
                        <TiSocialLinkedinCircular  className=" w-10 h-10  text-[#017BBC]"/>
                    </Button>
                    < Button  className="w-[92px] h-[42px] bg-[#E6E6E6] border-[1px] rounded-sm border-[#B7B7B7]   md:w-[220px]  md:h-[90px] md:rounded-md" 
                    onClick={() => window.open('https://t.me/yourTelegramUsername', '_blank')}
                    >
                        <h1 className="font-bold text-[12px] text-black m-1 md:text-[20px]">
                        تلگرام
                        </h1>
                        <FaTelegram className=" w-10 h-10  text-[#017BBC]"/>
                    </Button>
                    < Button  className="w-[92px] h-[42px] bg-[#E6E6E6] border-[1px] rounded-sm border-[#B7B7B7] m-1  md:w-[220px]  md:h-[90px] md:rounded-md" 
                    onClick={() => window.open('https://t.me/yourTelegramUsername', '_blank')}
                    >
                        <h1 className="font-bold text-[12px] text-black md:text-[20px]">
                        اینستاگرام
                        </h1>
                        <AiFillInstagram className="w-10 h-10  text-red-900"/>
                    </Button>
                </div>
            </div>
            <div className="w-[125px] container mx-auto my-3">
                <img src={arrowv} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center w-[250px] container mx-auto md:w-[450px] ">
                <h1 className="font-bold text-[20px] w-[187px] md:text-[40px] md:w-[700px] ">
            آدرس ما بر روی نقشه
                </h1>
                <img src={map} alt="" />
            </div>
                <div className="m-5 sm:w-[728px]">
                    <p className="text-center text-xs md:text-2xl">
                    آدرس:نشانی : تهران _ میدان آرژانتین _ خیابان لاله _ کوچه صاد _ پلاک ۱۸ -دفتر مرکزی سفرکو
                    </p>
                </div>

        </div>
        <div className="w-[125px] container mx-auto my-3 ">
                <img src={arrow} alt="" />
        </div>
           <div className="flex justify-center mb-60">
               <AiFillHeart className="text-[#FF0000] w-[30px] h-[25px]  md:w-[69px] md:h-[59px]"/>
                    <h1 className="text-[20px] md:text-[47px]">
                        با عشق برای ایران   
                    </h1>
               <AiFillHeart className="text-[#FF0000] w-[30px] h-[25px]  md:w-[69px] md:h-[59px]"/>
           </div>

        < Footer />

      </div>
    )
}
export default Aboutus ;

