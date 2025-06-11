import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Expertise from "@/pages/Expertise";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Career/Careers";
import CareerDetails from "@/pages/Career/CareerDetails"; 
import Awards from "@/pages/About/Awards";
import Leadership from "@/pages/About/Leadership";
import PropertiesPage from "@/pages/Property/PropertiesPage";
import PropertiesPage2 from "@/pages/Property/PropertiesPage2";
import ViewProperties from "@/pages/Property/View-Properties";
import Events  from "@/pages/Event/Events";
import Pressroom from "@/pages/Pressroom";
import NewsArticle from "@/pages/Pressroom/NewsArticle";
import VideoArticle from "@/pages/Pressroom/VideoArticle";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:title" element={<CareerDetails />} />
        <Route path="/about/awards" element={<Awards />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/propertiesPage" element={<PropertiesPage />} />
        <Route path="/view-properties/:id" element={<ViewProperties />} />
        <Route path="/PropertiesPage2" element={<PropertiesPage2 />}
        
         />
        <Route path="/events" element={<Events />} />
        <Route path="/pressroom" element={<Pressroom />} /> 
        <Route path="/pressroom/NewsArticle/:id" element={<NewsArticle />} />
        <Route path="/pressroom/VideoArticle/:id" element={<VideoArticle />} />
        
      </Routes>
    </Router>
  );
}

export default App;
