import world from "../../pages/Home/imghome/global.png"

const Languag= () => {
    return (


    <div>
      <div className="max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] flex justify-start container mx-auto mt-14">
      <button className="flex items-center text-black space-x-2">
        <span><img src={world} alt="" /></span>
        <span>فارسی</span>
      </button>
     </div>
    </div>
    );
};

export default Languag; 