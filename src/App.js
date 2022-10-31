import "./Styling/General.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Nav from "./components/Nav"
import ArticleList from "./components/ArticleList";
import FootballArticles from "./components/FootballArticles";
import CodingArticles from "./components/CodingArticles";
import CookingArticles from "./components/CookingArticles";

function App() {
  return (
    <div className="App">
     
      <Header/>
      <Nav/>
      
      <Routes>
      
   
      <Route path="/topics/coding" element={<CodingArticles/>}/>
      <Route path="/topics/cooking" element={<CookingArticles/>}/>
      <Route path="/" element={<ArticleList/>}/>
      </Routes>
      
      
      
     
    
    </div>
  );
}

export default App;
