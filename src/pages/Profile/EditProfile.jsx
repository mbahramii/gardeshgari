import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { MdEdit } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

function EditProfile() {
  const [fullNameInput, setFullNameInput] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [avatarInput, setAvatarInput] = useState("");
  const [originalData, setOriginalData] = useState({
    fullName: "",
    userName: "",
    avatar: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isChanged, setIsChanged] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [isUserNameEditable, setIsUserNameEditable] = useState(false);

  const fetchProfile = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const responseData = await response.json();

      const { name, username, avatar } = responseData.data;
      setFullNameInput(name || "");
      setUserNameInput(username || "");
      setAvatarInput(avatar || "");

      setOriginalData({
        fullName: name || "",
        userName: username || "",
        avatar: avatar || "",
      });

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const checkIfChangedAndValid = () => {
    const hasChanged =
      fullNameInput !== originalData.fullName ||
      userNameInput !== originalData.userName ||
      avatarInput !== originalData.avatar;

    const hasEmptyField = !fullNameInput.trim() || !userNameInput.trim();

    setIsChanged(hasChanged);
    setIsSubmitDisabled(!hasChanged || hasEmptyField);
  };

  useEffect(() => {
    checkIfChangedAndValid();
  }, [fullNameInput, userNameInput, avatarInput]);

  const handleSave = async () => {
    const payload = {
      name: fullNameInput,
      username: userNameInput,
      avatar: avatarInput,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/user",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.ok) {
        toast.success("بروزرسانی پروفایل با موفقیت انجام شد ", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
  
        console.log(await response.json());
        setShowCompleteProfileModal(false);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "خطایی رخ داده است.");
      }
    } catch (error) {
      setErrorMessage("ارتباط با سرور برقرار نشد. دوباره تلاش کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFullNameInput(originalData.fullName);
    setUserNameInput(originalData.userName);
    setAvatarInput(originalData.avatar || null);
    setIsChanged(false);
    setIsSubmitDisabled(true);
    setIsUserNameEditable(false);
  };
    // ادیت اواتار 
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarInput(reader.result); 
      checkIfChangedAndValid();
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (setter, value, originalValue) => {
    setter(value);
    checkIfChangedAndValid();
  };

  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <div className=" h-auto  bg-primary-500 rounded-lg md:w-[400px] lg:w-lg" >
      <div className="flex flex-col gap-10 md:p-8">
 
        <div className="flex flex-col items-center md:mt-16">
          <Avatar className="mb-4 rounded-full w-24 h-24 relative">
            {avatarInput ? (
              <AvatarImage
                src={avatarInput}
                alt="Profile"
                className="rounded-full"
              />
            ) : (
              <AvatarFallback className="flex items-center justify-center bg-gray-300 rounded-full w-full h-full" />
            )}

            
            <Button
              onClick={() => document.getElementById("avatar-upload").click()}
              className="bg-secondary-400 rounded-full p-1 flex items-center justify-center absolute top-16 right-1"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <MdEdit className="text-white" size={16} />
            </Button>

           
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </Avatar>
          <h3 className="text-lg font-medium text-gray-700 mt-2">
            {fullNameInput}
          </h3>
        </div>

                {/* تغییر نام خانوادگی  */}
        <div className="flex flex-col">
          <Label className="py-2 text-white">نام و نام خانوادگی</Label>
          <Input
            type="text"
            className="border p-2 rounded-md text-right"
            value={fullNameInput}
            onChange={(e) =>
              handleInputChange(
                setFullNameInput,
                e.target.value,
                originalData.fullName
              )
            }
          />
        </div>

              {/* تغییر نام کاربری  */}
        <div className="flex flex-col relative">
          <Label className="py-2 text-white">نام کاربری</Label>
          <div className="relative">
            <Input
              type="text"
              className="border p-2 rounded-md text-right"
              value={userNameInput}
              onChange={(e) =>
                handleInputChange(
                  setUserNameInput,
                  e.target.value,
                  originalData.userName
                )
              }
              // disabled={!isUserNameEditable}
            />
            {/* <Button
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              onClick={() => setIsUserNameEditable((prev) => !prev)}
            >
              {/* <MdEdit /> *
            {/* </Button> */}
          </div>
        </div>


        <div className="flex flex-row justify-between mt-6 px-8">
          <Button className="bg-natural-gray3" onClick={handleCancel}>
            انصراف
          </Button>
          <Button
            className="bg-secondary-400"
            onClick={handleSave}
            disabled={isSubmitDisabled}
          >
            ذخیره تغییرات
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
