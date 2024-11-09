import React from "react";
import moment from "jalali-moment";
import { FaRegClock } from "react-icons/fa6";
import { PiCalendarDots } from "react-icons/pi";
const toPersianDigits = (num) => {
  return num.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
};

const ChatMessage = ({ message, isSupport, senderName, createdAt }) => {
  const persianDate = moment(createdAt).locale("fa").format("YYYY/MM/DD");
  const persianTime = moment(createdAt).locale("fa").format("HH:mm");

  const persianDateWithFarsiNumbers = toPersianDigits(persianDate);
  const persianTimeWithFarsiNumbers = toPersianDigits(persianTime);
  console.log(isSupport);

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
          <p className="text-sm font-semibold">{senderName}</p>
          <div className="flex items-center  gap-2 text-xs text-white">
            <div className="flex flex-row gap-1">
              <span className="mr-2">{persianDateWithFarsiNumbers}</span>
              <PiCalendarDots className="w-full h-4 text-lg mb-1" />
            </div>
            <div className="flex flex-row gap-1 text-wrap">
              <span>{persianTimeWithFarsiNumbers}</span>
              <FaRegClock />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;