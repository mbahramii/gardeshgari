import notcontent from "../Home/imghome/notcontent.svg"
import { Link } from "react-router-dom";



const EmptyPage = () => {

    return(
        <div className="flex flex-col justify-center items-center mt-8">
                <h1 className="font-bold mt-5 ">
                    مطلب مورد نظر یافت نشد 
                </h1>
                <img src={notcontent} alt="" className="mt-5" />

                <Link to="/mytravels" className="mt-5">
                    بازگشت به صفحه قبل 
              </Link>
                
                
        </div>
    )
}
export default EmptyPage;