import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "jalali-moment";

const SelectedArticles = ({ id, title, imageUrl, content, createdAt }) => {
  const navigate = useNavigate();


  // با کلیک شما به محتوای ارتیکل میروید 
  const handleClick = () => {
    navigate(`/article-page/${id}`);
  };

  return (
    <div dir="rtl"
      onClick={handleClick}
      className="flex bg-white text-white overflow-hidden border-b border-gray-300 cursor-pointer"
    >
      <div className="w-[300px] h-[129px] relative rounded-lg overflow-hidden m-3">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover h-full w-full rounded-lg"
        />
        <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded">
            گردشگری
        </div>
        <h2 className="text-xl font-bold text-black">{title}</h2>

    </div>   
    </div>
  );
};

export default SelectedArticles;