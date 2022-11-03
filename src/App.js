import "./Styling/General.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Nav from "./components/Nav"
import ArticleList from "./components/ArticleList";
import ArticlesByTopic from "./components/ArticlesByTopic";
import { useState, useEffect } from "react";
import { getAllArticles} from "./apifunctions";
import SingleArticle from "./components/SingleArticle";
import SortingMenu from "./components/SortingMenu";
import OrderMenu from "./components/OrderMenu";

function App() {
  const [articles, setArticles] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [orderByURL, setOrderByURL] = useState("?orderBy=desc")
  const [sortByURL, setSortByURL] = useState("&sort_by=created_at")



  useEffect(() => {
    getAllArticles(orderByURL, sortByURL)
      .then(({data: {articles}}) => {
        
         setArticles(articles)
         setIsLoading(false)
      }) 
   }, [orderByURL, sortByURL])

   if (isLoading) return (<p> Loading...</p>)

  return (
    <div className="App">
     
      <Header/>
      <Nav/>
      <SortingMenu setSortByURL={setSortByURL} sortByURL={sortByURL}/>
      <OrderMenu orderByURL={orderByURL} setOrderByURL={setOrderByURL} />
      <Routes>      
      <Route path="/topics/:topic_id" element={<ArticlesByTopic orderByURL={orderByURL} sortByURL={sortByURL} articles={articles}/>}/>
      <Route path="/" element={<ArticleList articles={articles} />}/>   
      <Route path="/articles/:article_id" element={<SingleArticle/>}/>
      </Routes>
      
      
      
 
    
    </div>
  );
}

export default App;
