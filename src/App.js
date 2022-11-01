import "./Styling/General.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Nav from "./components/Nav"
import ArticleList from "./components/ArticleList";
import ArticlesByTopic from "./components/ArticlesByTopic";
import { useState, useEffect } from "react";
import { getAllArticles } from "./apifunctions";

import SingleArticle from "./components/SingleArticle";

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
   //getAllArticles gets all the articles which may be a problem when looking at specific topics since if we don't get the correct topics it won't send us an error. 

   if (isLoading) return (<p> Loading...</p>)

  return (
    <div className="App">
     
      <Header/>
      <Nav/>

      <Routes>      
      <Route path="/topics/:topic_id" element={<ArticlesByTopic articles={articles}/>}/>
      <Route path="/" element={<ArticleList articles={articles} />}/>
      
      <Route path="/" element={<ArticleList/>}/>
      <Route path="/articles/:article_id" element={<SingleArticle/>}/>
      </Routes>
      
      
      
 
    
    </div>
  );
}

export default App;
