import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "jalali-moment";
import { FaRegClock } from "react-icons/fa6";
import { PiCalendarDots } from "react-icons/pi";

// تبدیل اعداد انگلیسی به فارسی 
const toPersianDigits = (num) =>
  num.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);


// این کامپوننت ارتیکل را از سرور میگیرد و برای فراخوانی در صفحه هوم پیج بکار میرود 

const HomeArticle = ({ id, title, imageUrl, content, createdAt }) => {
  const navigate = useNavigate();
  // تبدیل تاریخ و زمان به شمسی 
  const persianDate = moment(createdAt).locale("fa").format("YYYY/MM/DD");
  const persianTime = moment(createdAt).locale("fa").format("HH:mm");
  const persianDateWithFarsiNumbers = toPersianDigits(persianDate);
  const persianTimeWithFarsiNumbers = toPersianDigits(persianTime);

  // با کلیک شما به محتوای ارتیکل میروید 
  const handleClick = () => {
    navigate(`/article-page/${id}`);
  };

  return (
    <div dir="rtl"
      onClick={handleClick}
      className="flex bg-white text-white overflow-hidden border-b border-gray-300 cursor-pointer"
    >
      <div className="md:w-1/4 relative rounded-lg overflow-hidden m-3">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover h-full w-full rounded-lg"
        />
        <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded">
            گردشگری
        {/* {category.target.value} */}
        </div>
      </div>
      <div className="w-3/4 p-4 flex flex-col justify-between">
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <p
          className="text-gray-600 mt-2 line-clamp-2 w-3/5"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="flex flex-col justify-start text-gray-400 text-sm mt-4">
          <div className="flex items-center">
            <PiCalendarDots className="ml-1" />
            <span>{persianDateWithFarsiNumbers}</span>
          </div>
          <div className="flex items-center mt-1">
            <FaRegClock className="ml-1" />
            <span>{persianTimeWithFarsiNumbers}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeArticle;