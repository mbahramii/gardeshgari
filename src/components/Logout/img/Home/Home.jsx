// import React, { useEffect, useState } from 'react';
// import mapiran from "./imghome/map iran.png";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Switch } from "@/components/ui/Switch";
// import Languag from "../../components/languag/Languag";
// import List from "../List";
// import Footer from "../../components/footer/footer";
// import ArticlePage from '../ArticleTest';

// const Home = () => {
//   const [submittedArticles, setSubmittedArticles] = useState([]); // آرایه مقالات ثبت‌شده
//   const [loading, setLoading] = useState(true); // وضعیت بارگذاری
//   const [error, setError] = useState(null); // وضعیت خطا

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch('YOUR_API_ENDPOINT'); // آدرس API خود را اینجا قرار دهید
//         if (!response.ok) {
//           throw new Error('خطا در دریافت داده‌ها');
//         }
//         const data = await response.json();
//         setSubmittedArticles(data); // ذخیره مقالات در state
//       } catch (err) {
//         setError(err.message); // ثبت خطا
//       } finally {
//         setLoading(false); // پایان بارگذاری
//       }
//     };

//     fetchArticles(); // فراخوانی تابع بارگذاری مقالات
//   }, []);
//   const [htmlContent, setHtmlContent] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8000/storage/article-contents/l7PD6k8SAOpmKnCHiplc70XL0qkJdPFzBgKY68mR.html", {
//       mode: 'cors'
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch HTML file");
//         }
//         return response.text();
//       })
//       .then((data) => {
//         console.log(data)
//         setHtmlContent(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching HTML content:", error);
//       });
//   }, []);

//   return (
//     <div>

//         {htmlContent && (
//           <div
//             className="article-content"
//             dangerouslySetInnerHTML={{ __html: htmlContent }}
//           />
//         )}

//       {/* <h1 className="text-center text-3xl font-bold mt-4">مدیریت مقالات</h1>
//       <ArticlePage />

//       {loading && <p>در حال بارگذاری مقالات...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       <div>
//         {submittedArticles.map((article) => (
//           <span key={article.id} className="mt-4 block text-center">
//             <h2 className="text-xl font-semibold">{article.title}</h2>
//             <img
//               src={article.imageUrl}
//               alt="Cover"
//               className="mt-2 w-full h-64 object-cover rounded-md"
//             />
//           </span>
//         ))}
//       </div> */}

//       <Languag />

//       <div className="max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] container mx-auto min-h-screen flex flex-col items-center justify-center rounded-3xl mt-5 bg-[#03C9C9] p-4">
//         <div className="max-w-5xl w-full">
//           <div className="flex flex-col items-center lg:flex-row lg:justify-between">
//             <div className="flex justify-center lg:justify-start">
//               <img src={mapiran} alt="نقشه ایران" className="w-72 lg:w-96" />
//             </div>
//             <div className="flex flex-col gap-11 mt-8 lg:mt-0 lg:ml-16">
//               <h1 className="text-2xl lg:text-3xl font-bold mb-[89px] text-center lg:text-right mt-7 text-white">
//                 ! دیدنی های ایران رو کشف کن
//               </h1>
//               <div dir="rtl" className="m-2 bg-[#03C9C9] text-[#797979] mb-[50px] flex">
//                 <Input type="text" placeholder="هرجا رو میخوای جستجو کن" className="h-[54px] bg-white " />
//               </div>
//               <h2 className="text-white text-end mr-2 text-lg font-semibold">فیلتر کردن مکان</h2>
//               <div className="flex flex-col items-end">
//                 <div className="max-w-[300px] bg-[#047C81] flex flex-col p-2 rounded-md">
//                   <div className="text-white text-end mb-3">نوع جاذبه</div>
//                   <div className="flex flex-col">
//                     <div className="flex justify-end gap-2 mb-2">
//                       <label className="flex items-center"><Switch className="mr-2" /> طبیعی</label>
//                       <label className="flex items-center"><Switch className="mr-2" /> تاریخی</label>
//                       <label className="flex items-center"><Switch className="mr-2" /> فرهنگی</label>
//                     </div>
//                     <div className="flex justify-end gap-2 ">
//                       <label><Switch className="mr-2 " /> گردشگری</label>
//                       <label className="flex"><Switch className="mr-2" /> مذهبی</label>
//                     </div>
//                   </div>
//                   <Button className="bg-orange-500 text-white mt-4 w-[100px] h-[30px] lg:rounded-2xl">اعمال فیلتر</Button>
//                 </div>
//               </div>
//               <div className="m-4 ">
//                 <Button variant="outline" className="w-full">افزودن مکان</Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import mapiran from "./imghome/map iran.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/Switch";
import Languag from "../../components/languag/Languag";
import Footer from "../../components/footer/footer";

const Home = () => {
  const [submittedArticles, setSubmittedArticles] = useState([]); // آرایه مقالات ثبت‌شده
  const [loading, setLoading] = useState(true); // وضعیت بارگذاری
  const [error, setError] = useState(null); // وضعیت خطا

  // // فانکشن برای دریافت مقالات
  // const fetchArticles = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch('http://127.0.0.1:8000/api/user/tickets'); // آدرس API خود را اینجا قرار دهید
  //     if (!response.ok) {
  //       throw new Error('خطا در دریافت داده‌ها');
  //     }
  //     const data = await response.json();

  //     // فرض می‌کنیم که پاسخ شامل آرایه‌ای از اشیاء با خصوصیات `title` و `coverImage` است
  //     setSubmittedArticles(data.map(article => ({
  //       id: article.id,
  //       title: article.title,
  //       coverImageUrl: article.coverImageUrl
  //     })));
  //   } catch (err) {
  //     setError(err.message); // ثبت خطا
  //   } finally {
  //     setLoading(false); // پایان بارگذاری
  //   }
  // };
  const fetchArticles = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token"); // گرفتن توکن از localStorage
      const response = await fetch('http://127.0.0.1:8000/api/user/articles', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('خطا در دریافت داده‌ها');
      }
  
      const data = await response.json();
  console.log(data)
      // فرض می‌کنیم که پاسخ شامل آرایه‌ای از اشیاء با خصوصیات `title` و `coverImage` است
      setSubmittedArticles(data.map(article => ({
        id: article.id,
        title: article.title,
        coverImageUrl: article.img, // آدرس عکس کاور از پاسخ
      })));
    } catch (err) {
      setError(err.message); // ثبت خطا
    } finally {
      setLoading(false); // پایان بارگذاری
    }
  };
  

  useEffect(() => {
    fetchArticles(); // فراخوانی تابع بارگذاری مقالات
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-4">مدیریت مقالات</h1>

      {loading && <p>در حال بارگذاری مقالات...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* نمایش مقالات */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {submittedArticles.map((article) => (
          <span key={article.id} className="block text-center border rounded-md p-4 bg-white">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <img
              src={article.coverImageUrl}
              alt="Cover"
              className="mt-2 w-full h-64 object-cover rounded-md"
            />
          </span>
        ))}
      </div>

      <Languag />

      <div className="max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] container mx-auto min-h-screen flex flex-col items-center justify-center rounded-3xl mt-5 bg-[#03C9C9] p-4">
        <div className="max-w-5xl w-full">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="flex justify-center lg:justify-start">
              <img src={mapiran} alt="نقشه ایران" className="w-72 lg:w-96" />
            </div>
            <div className="flex flex-col gap-11 mt-8 lg:mt-0 lg:ml-16">
              <h1 className="text-2xl lg:text-3xl font-bold mb-[89px] text-center lg:text-right mt-7 text-white">
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
      <Footer />
    </div>
  );
};

export default Home;
