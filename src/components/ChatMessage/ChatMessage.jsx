import React from "react";
import moment from "jalali-moment"; // ایمپورت کتابخانه‌ی jalali-moment برای کار با تاریخ شمسی
import { FaRegClock } from "react-icons/fa6";
import { PiCalendarDots } from "react-icons/pi";

// تابعی برای تبدیل اعداد انگلیسی به فارسی
const toPersianDigits = (num) => {
  return num.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
};


// کامپوننت چت مسیج که پیام ،نام فرستنده ، و زمان ارسال را نمایش میدهد 
const ChatMessage = ({ message, isSupport, senderName, createdAt }) => {
  // تبدیل تاریخ و زمان به فرمت شمسی با استفاده از  مومنت و تنظیم لوکال به فارسی
  const persianDate = moment(createdAt).locale("fa").format("YYYY/MM/DD");
  const persianTime = moment(createdAt).locale("fa").format("HH:mm");
  // تبدیل تاریخ و زمان به اعداد فارسی با استفاده از تابع تاپ پرشین دیجیت
  const persianDateWithFarsiNumbers = toPersianDigits(persianDate);
  const persianTimeWithFarsiNumbers = toPersianDigits(persianTime);

  return (
    <div
      className={`flex md:max-w ${
        isSupport ? "justify-end" : "justify-start"
      } mb-4`}
    >
      <div
        className={`min-w-[250px] rounded-lg p-4 ${
          isSupport ? "bg-accent-700 text-white" : "bg-accent-500 text-white"
        } max-w-lg`}
      >
        <div className="flex flex-row items-center justify-between text-wrap m  px-2 py-1 rounded-t-lg">
          {/* نمایش نام فرستنده پیام  */}
          <p className="text-sm font-semibold">{senderName}</p>

          <div className="flex items-center  gap-2 text-xs text-white">
            {/* نمایش تاریخ پیام همراه با آیکون تقویم */}
            <div className="flex flex-row gap-1">
              <span className="mr-2">{persianDateWithFarsiNumbers}</span>
              <PiCalendarDots className="w-full h-4 text-lg mb-1" />
            </div>

            {/* نمایش زمان پیام همراه با آیکون ساعت */}
            <div className="flex flex-row gap-1 text-wrap">
              <span>{persianTimeWithFarsiNumbers}</span>
              <FaRegClock />
            </div>
          </div>
        </div>
        <div className="mt-2">
           {/* نمایش متن پیام */}
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;