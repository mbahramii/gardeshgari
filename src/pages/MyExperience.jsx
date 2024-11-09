// import ArticleMenu from "../components/ArticleMenu";
// import EmptyPage from "./AArticle/EmptyPage";
// import MyExperienceArticle from "./MyExperienceArticle";
// import { Routes, Route } from 'react-router-dom';


// const MyExperience= () =>{
//     return(
//         <div>
//             <ArticleMenu />
//             <div>
                
//         <Routes>
//             <Route path="/myarticle" element={<MyExperienceArticle/>} />
//             <Route path="/empty1" element={< EmptyPage/>} />
//             <Route path="/empty2" element={< EmptyPage/>} />
//             <Route path="/empty3" element={< EmptyPage/>} />
//             <Route path="/empty4" element={< EmptyPage/>} />
//         </Routes>
//             </div>
//         </div>
//     )
// }

// export default MyExperience ;



// MyExperience.js
import { Routes, Route } from 'react-router-dom';
import ArticleMenu from "../components/ArticleMenu";
import EmptyPage from "./AArticle/EmptyPage";
import MyExperienceArticle from "./MyExperienceArticle";

const MyExperience = () => {
  return (
    <div>
      <ArticleMenu />
      <Routes>
        <Route path="/myarticle" element={<MyExperienceArticle />} />
        <Route path="/empty1" element={<EmptyPage />} />
        <Route path="/empty2" element={<EmptyPage />} />
        <Route path="/empty3" element={<EmptyPage />} />
        <Route path="/empty4" element={<EmptyPage />} />
      </Routes>
    </div>
  );
};

export default MyExperience;
