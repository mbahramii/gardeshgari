// Code-gardeshgeri 

// Author: M.Bahrami
// Front.end
// Created on: sep 2024




import HomeIcon from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from "./pages/Aboutus/Aboutus";
import { useState } from "react";
import Profile from "./pages/Profile/Profile";
import CompleteProfileModal from "./components/CompleteProfileModal/CompleteProfileModal";
import MyTickets from "./pages/MyTickets";
import CreateTicket from "./pages/CreateTicket";
import { ToastContainer } from "react-toastify";
import TicketChat from "./pages/TicketChat";
import List from "./pages/List";
import { LogOut } from "lucide-react";
import LogoutConfirmation from "./components/Logout/Logout";
import TravelExperience from "./pages/Profile/travelExperience";
import MyExperienceArticle from "./pages/MyExperienceArticle";
import EmptyPage from "./pages/AArticle/EmptyPage";
import MyExperience from "./pages/MyExperience";
import PublishingArticle from "./pages/PublishingArticle";
import Navbar from "./components/menubar/Navbar";
import ArticlePage from "./pages/ArticlePage";
import LoadingSpinner from "./pages/LoadingSpinner";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showCompleteProfileModal, setShowCompleteProfileModal] = useState(true);
  const [submittedArticles, setSubmittedArticles] = useState([]); 

  const handleArticleSubmit = (newArticle) => {
    setSubmittedArticles([...submittedArticles, newArticle]); 
  };

  return (
    <div className="vazir">
      <Router>
        <Navbar  showModal={showModal} setShowModal={setShowModal} />
        <ToastContainer />
        <CompleteProfileModal />
        <Routes>
          <Route path="/" element={<HomeIcon submittedArticles={submittedArticles} />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/publishing-article" element= {<PublishingArticle />} />
          <Route path="/profile/tickets" element={<MyTickets />} />
          <Route path="/profile/tickets/createticket" element={<CreateTicket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/completeprofile" element={<CompleteProfileModal />} />
          <Route path="/profile/tickets/ticket-chat/:ticketId" element={<TicketChat />} />
          <Route path="/list" element={<List submittedArticles={submittedArticles} />} /> 
          <Route path="/log" element={<LogoutConfirmation/>} />
          <Route path="/travelexperience" element={< TravelExperience/>} />
           < Route path="/mytravels" element={< MyExperienceArticle />} />
           <Route path="/empty1" element={< EmptyPage />} />
        
          <Route path="/article-page/:id" element={<ArticlePage />} />
          {/* <Route path="/myexperience/*" element={<MyExperience />} /> */}
          <Route path="/myexperience/*" element={<MyExperience />} />
          <Route path="/loading"  element={<LoadingSpinner /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
