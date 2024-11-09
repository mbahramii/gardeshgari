import React, { useState, useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { IoCameraOutline, IoCloseCircle } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select"; 
import ArticleMenu from "../components/ArticleMenu";
import { Button } from "../components/ui/button";



const categoryOptions = [
  { value: "1", label: "تاریخی" },
  { value: "2", label: "طبیعی" },
  { value: "3", label: "فرهنگی" },
  { value: "4", label: "گردشگری" },
  { value: "5", label: "مذهبی" },
];

const MyExperienceArticle = ({ initialArticleId }) => {
  const [articleId, setArticleId] = useState(initialArticleId || null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const imageRef = useRef(null);
  const [active, setActive] = useState(false);
  const [address, setAddress] = useState("");
  const [publishTime, setPublishTime] = useState("");
  const [visitCost, setVisitCost] = useState("");


  const fetchArticles = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/articles", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) throw new Error("خطا در دریافت مقالات");

      const data = await response.json();
      setArticles(data);
    } catch (error) {
      toast.error("خطا در دریافت مقالات.");
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleTitleChange = (event) => setTitle(event.target.value);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleContentChange = (event, editor) => setContent(editor.getData());

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !content || !image) {
      toast.warn("لطفاً همه فیلدهای الزامی را پر کنید.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("img", image);
    categories.forEach((category) => formData.append("categories[]", category));
    formData.append("address", address);
    formData.append("publishTime", publishTime);
    formData.append("visitCost", visitCost);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:8000/api/user/articles", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        toast.error("خطا در ارسال مقاله: " + JSON.stringify(errorResponse));
        return;
      }

      toast.success("مقاله با موفقیت ارسال شد!");
      setTitle("");
      setContent("");
      setImage(null);
      setPreviewImage(null);
      setCategories([]);
      setAddress("");
      setPublishTime("");
      setVisitCost("");
      fetchArticles();
    } catch (error) {
      toast.error("خطا در ارسال مقاله.");
    }
  };

  const handleTogglePage = () => setActive(!active);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="space-y-6">
        {!active ? (
          <div>
            <div className="flex justify-end p-3">
              <h1 className="text-[10px] text-end w-60 text-gray-400">
                صفحه اصلی &gt; تجربه های سفر &gt; تجربه های سفر من &gt; نوشتن تجریه جدید سفر
              </h1>
            </div>
            <ArticleMenu />
            <div dir="rtl">
              <label className="text-lg font-medium text-gray-700">عنوان</label>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                required
                maxLength={255}
                className="bg-gray-400 my-3 block w-[290px] px-3 py-2 border border-gray-400 rounded-md shadow-sm"
              />
            </div>

            <div
              className="relative flex items-center justify-center w-full h-64 border border-dashed rounded-lg bg-gray-100 mb-6"
              onClick={() => !previewImage && imageRef.current.click()}
            >
              {previewImage ? (
                <div className="relative w-full h-full">
                  <img src={previewImage} alt="Selected" className="object-cover w-full h-full rounded-lg" />
                  <button
                    type="button"
                    className="absolute top-2 right-2 bg-white rounded-full p-1 text-red-500 hover:bg-red-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewImage(null);
                      setImage(null);
                    }}
                  >
                    <IoCloseCircle className="w-6 h-6" />
                  </button>
                </div>
              ) : (
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center text-gray-600 cursor-pointer">
                    <IoCameraOutline className="ml-2 w-6 h-6" />
                    <span className="font-semibold">انتخاب عکس</span>
                  </div>
                  <p className="text-xs text-gray-500">ابعاد عکس ها باید 800 در 450 باشد</p>
                </div>
              )}
              <input type="file" accept="image/*" ref={imageRef} onChange={handleImageChange} className="hidden" />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700" dir="rtl">
                محتوای مقاله
              </label>
              <CKEditor
                editor={ClassicEditor}
                onChange={handleContentChange}
                config={{
                  toolbar: [
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "link",
                    "|",
                    "bulletedList",
                    "numberedList",
                    "|",
                    "blockQuote",
                    "insertTable",
                    "|",
                    "imageUpload",
                    "undo",
                    "redo",
                  ],
                  simpleUpload: {
                    uploadUrl: articleId
                      ? `http://127.0.0.1:8000/api/user/articles/${articleId}/images`
                      : "",
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                      Accept: "application/json",
                    },
                  },
                }}
              />
            </div>

            <div className="m-10 flex">
              <Button onClick={handleTogglePage} className="w-[130px] bg-gray-600 m-2 text-white font-medium ">
                ادامه
              </Button>
              <Button
                onClick={() => {
                  setTitle("");
                  setContent("");
                  setImage(null);
                  setPreviewImage(null);
                }}
                className="w-[130px] bg-gray-600 m-2 text-white font-medium "
              >
                انصراف
              </Button>
            </div>
          </div>
        ) : (
          <div className="">
            <div dir="rtl">
              <div className="bg-white shadow-sm rounded pt-6 pb-8 mb-4 max-w-4xl mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-center">اطلاعات تکمیلی مقاله</h2>
                <div className="flex flex-col justify-start max-w-[250px] sm:flex sm:flex-row sm:justify-between sm:gap-5 sm:max-w-[700px] sm:p-4 md:max-w-[800px] md:mx-auto">
                  <div className="mb-4">
                    <label className="text-sm mb-2 font-bold">دسته بندی مقاله</label>
                    
                    <Select
                    className="w-60"
                      options={categoryOptions}
                      isMulti
                      value={categoryOptions.filter((option) => categories.includes(option.value))}
                      onChange={(selectedOptions) =>
                        setCategories(selectedOptions ? selectedOptions.map((option) => option.value) : [])
                      }
                    />
                  </div>

                  <div>
                    <label className="text-sm mb-2 font-bold">آدرس</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="bg-gray-600 text-white border border-gray-400 rounded px-3 py-2 w-full"
                    />
                  </div>
                </div>
              </div>
                      <div className="flex justify-end">

              <Button type="submit" className="w-[130px] bg-blue-600 m-2 text-white font-medium ">
                انتشار
              </Button>
              <Button onClick={handleTogglePage} className="w-[130px] bg-gray-600 m-2 text-white font-medium ">
                بازگشت
              </Button>
                      </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MyExperienceArticle;
