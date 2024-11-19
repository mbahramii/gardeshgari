import React, { useState, useEffect } from "react";
import Modal from "../../components/SingalModal1/SingInModal1";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import HomeArticle from "../../components/HomeArticle"; 
import Footer from "../../components/footer/Footer";
import mapiran from "./imghome/map iran.png";
import { Input } from "../../components/ui/input";
import Select from "react-select/base";
import SelectedArticles from "../../components/SelectedArticles";

const HomePage = ({ showModal, setShowModal }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // گرفتن مقالات 
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
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);



  return (
    <div>
      <div className=" font-normal flex flex-col mt-4 md:w-[700px] lg:w-[1000px] xl:w-[1250px]  container mx-auto  bg-white">

              <div className="w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1250px]  container mx-auto min-h-screen flex flex-col items-center justify-center rounded-3xl mt-5 bg-[#03C9C9]">
        <div className="max-w-5xl w-full">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="flex justify-center lg:justify-start">
              <img src={mapiran} alt="نقشه ایران" className="w-96 h-full lg:w-[500px]" /> 
            </div>
            <div className="flex flex-col gap-11 mt-8 lg:mt-0 lg:ml-16">
              <h1 className="text-2xl lg:text-3xl font-bold my-[30px] text-center lg:text-right mt-7 text-white">
                ! دیدنی های ایران رو کشف کن
              </h1>
              <div dir="rtl" className="m-2 bg-[#03C9C9] text-[#797979] mb-[50px] flex">
                <Input type="text" placeholder="هرجا رو میخوای جستجو کن" className="h-[54px] bg-white " />
              </div>
              <h2 className="text-white text-end mr-2 text-lg font-semibold">فیلتر کردن مکان</h2>
              <div className="flex flex-col items-end">
                <div className="max-w-[300px] bg-[#047C81] flex flex-col p-2 rounded-md">
                  <div className="text-white text-end mb-3">نوع جاذبه</div>
                  <div className="flex flex-col">
                    <div className="flex justify-end gap-2 mb-2">
                      <label className="flex items-center"><Switch className="mr-2" /> طبیعی</label>
                      <label className="flex items-center"><Switch className="mr-2" /> تاریخی</label>
                      <label className="flex items-center"><Switch className="mr-2" /> فرهنگی</label>
                    </div>
                    <div className="flex justify-end gap-2 ">
                      <label><Switch className="mr-2 " /> گردشگری</label>
                      <label className="flex"><Switch className="mr-2" /> مذهبی</label>
                    </div>
                  </div>
                  <Button className="bg-orange-500 text-white mt-4 w-[100px] h-[30px] lg:rounded-2xl">اعمال فیلتر</Button>
                </div>
              </div>
              <div className="m-4 ">
                <Button variant="outline" className="w-full">افزودن مکان</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" my-5 p-5 rounded-lg">
          <h1 className=" text-xl py-5 font-semibold" dir="rtl">مقالات منتخب ماه</h1>
          {loading ? (
            <p>در حال بارگذاری...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="flex flex-wrap items-center justify-center max-w-[1000px] container mx-auto gap-3">
              {articles
        .filter((article) => article.id === 2 ||  article.id === 4 || article.id === 5 || article.id === 6 || article.id === 945545  ) // فیلتر مقالات با ایدی 45 و 46
        .map((article) => (
                < SelectedArticles
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  imageUrl={article.img}

                />
              ))}
            </div>
          )}
        </div>

        <div className=" my-5 p-5 rounded-lg">
        <h1 className="text-xl py-5 font-semibold" dir="rtl">مقالات جدید این ماه</h1>
          
          {loading ? (
            <p>در حال بارگذاری...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="">
              {articles.map((article) => (
                <HomeArticle
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  imageUrl={article.img}
                  content={article.content}
                  createdAt={article.created_at}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
