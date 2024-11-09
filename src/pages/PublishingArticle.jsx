import { InputIcon } from "@radix-ui/react-icons";
import Navbar from "../components/menubar/Navbar";
import world from "./Home/imghome/global.png";
import { Input } from "@/components/ui/input";
import React, { useState } from 'react';

const PublishingArticle = () => {
    const [category, setCategory] = useState('');
    const [address, setAddress] = useState('');
    const [publishTime, setPublishTime] = useState('');
    const [visitCost, setVisitCost] = useState('');
    const [borderColor, setBorderColor] = useState("border-gray-200");

    // تابع ارسال مقاله به سرور
    const handlePublishArticle = async () => {
        const formData = new FormData();
        formData.append('category', category);
        formData.append('address', address);
        formData.append('publishTime', publishTime);
        formData.append('visitCost', visitCost);

        try {
            const response = await fetch('http://localhost:9000/articles', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Article published successfully:', data);
                // Reset fields
                setCategory('');
                setAddress('');
                setPublishTime('');
                setVisitCost('');
            } else {
                console.error('Error publishing article:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-gray-200">
            <div className="max-w-[300px] sm:max-w-[700px] lg:max-w-[1000px] flex justify-start container mx-auto my-12">
                <button className="flex items-center text-black">
                    <span><img src={world} alt="" /></span>
                    <span>فارسی</span>
                </button>
            </div>

            <div dir="rtl">
                <div className="bg-white shadow-sm rounded pt-6 pb-8 mb-4 max-w-4xl mx-auto">
                    <h2 className="text-xl font-semibold mb-4 text-center">اطلاعات تکمیلی مقاله</h2>
                    <div className="flex flex-col justify-start max-w-[250px] sm:flex sm:flex-row sm:justify-between sm:gap-5 sm:max-w-[700px] sm:p-4 md:max-w-[800px] md:mx-auto">
                        <div className="mb-4 sm:w-[400px]">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                دسته بندی مقاله
                            </label>
                            <select
                                id="category"
                                className="focus:ring-blue-500 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:h-[50px]"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">دسته بندی را انتخاب کنید</option>
                                <option value="1">گردشگری</option>
                                <option value="2">فرهنگی</option>
                                <option value="3">تاریخی</option>
                                <option value="4">جغرافیایی</option>
                            </select>
                        </div>

                        <div className="mb-4 sm:w-[400px]">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                آدرس جاذبه گردشگری
                            </label>
                            <textarea
                                id="address"
                                className="focus:ring-blue-500 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:h-[50px]"
                                placeholder="آدرس را وارد کنید"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end md:gap-10">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handlePublishArticle} // استفاده از تابع برای ارسال مقاله
                        >
                            منتشر کردن مقاله
                        </button>
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            انصراف از انتشار مقاله
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublishingArticle;
