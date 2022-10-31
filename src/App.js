import "./Styling/General.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Nav from "./components/Nav"
import ArticleList from "./components/ArticleList";
import FootballArticles from "./components/FootballArticles";
import CodingArticles from "./components/CodingArticles";
import CookingArticles from "./components/CookingArticles";
import { useState, useEffect } from "react";
import { getAllArticles } from "./apifunctions";


function App() {
  const [articles, setArticles] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllArticles()
      .then(({data: {articles}}) => {
         setArticles(articles)
         setIsLoading(false)
      }) 
   }, [isLoading])

   if (isLoading) return (<p> Loading...</p>)

  return (
    <div className="App">
     
      <Header/>
      <Nav/>

      <Routes>      
      <Route path="/topics/football" element={<FootballArticles articles={articles}/>}/>
      <Route path="/topics/coding" element={<CodingArticles articles={articles}/>}/>
      <Route path="/topics/cooking" element={<CookingArticles articles={articles}/>}/>
      <Route path="/" element={<ArticleList articles={articles} />}/>
      </Routes>    
    
    </div>
  );
}

export default App;
