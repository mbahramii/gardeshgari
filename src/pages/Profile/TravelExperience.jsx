import React, { useState, useEffect } from "react";
import ExperienceArticle from "../../components/ExperienceArticle";
import main from "../Home/imghome/pictures.svg"
import { Input } from "../../components/ui/input";
import Footer from "../../components/footer/Footer";



const TravelExperience = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/articles", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch articles");

      const data = await response.json();
      setArticles(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="max-w-screen-xl  mx-auto  ">
<div className="flex flex-col items-center"> 

      <h1 className="font-bold text-[65px] text-center">
        تجربه های سفر
      </h1>

      <p className=" text-[#C21500] w-[320px] text-center">
      ببین بقیه کجا میرن، بقیه هم ببینن تو کجا میری:)
      تجربیات سفرت رو با دیگران به اشتراک بگذار...
      </p>

</div>
      <div>
        <img src={main} alt="" />
      </div>


      <div className="bg-[#03C9C9] mb-4 w-[300px]  sm:w-[450px] md:w-[720px] lg:w-[1020px] xl:w-[1226px] flex flex-col items-center container mx-auto md:flex md:flex-row md:items-start md:gap-3 p-2  h-[390px]
      ">

                            <select
                                className="focus:ring-blue-500 block appearance-none my-2  bg-gray-200 border  border-gray-200 text-gray-700 py-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 
                                 w-[290px]  sm:w-[400px] sm:h-[50px]"
                            >
                                <option value="">نوع جاذبه </option>
                                <option value="1">گردشگری</option>
                                <option value="2">فرهنگی</option>
                                <option value="3">تاریخی</option>
                                <option value="4">جغرافیایی</option>
                            </select>

                            <select
                                className="focus:ring-blue-500 block appearance-none my-2 bg-gray-200 border border-gray-200 text-gray-700 py-3  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 
                                w-[290px]  sm:w-[400px] sm:h-[50px]"
                            >
                                <option value="">غیر جاذبه </option>
                                <option value="1">گردشگری</option>
                                <option value="2">فرهنگی</option>
                                <option value="3">تاریخی</option>
                                <option value="4">جغرافیایی</option>
                            </select>
                            <input dir="rtl" placeholder="چی میخوای ؟؟
                            " type="text " className="w-[290px] my-2  sm:w-[400px] sm:h-[50px] p-4" />
                        </div>
                              



      <div className="grid grid-cols-2 py-5 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1 md:p-3">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading &&
          !error &&
          articles.map((article) => (
            < ExperienceArticle key={article.id} id={article.id} article={article} />
          ))}
      </div>

        <div>
          < Footer />
        </div>
    </div>
  );
};

export default TravelExperience;
