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
import ErrorPage from "./components/ErrorPage";

function App() {
  const [articles, setArticles] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [orderByURL, setOrderByURL] = useState("?orderBy=desc")
  const [sortByURL, setSortByURL] = useState("&sort_by=created_at")
  const [err, setErr] = useState(false)



  useEffect(() => {
    getAllArticles(orderByURL, sortByURL)
      .then(({data: {articles}}) => {
        
         setArticles(articles)
         setIsLoading(false)
      })
      .catch((err) => {
        setErr(err.code)
      })
   }, [orderByURL, sortByURL])

   if(err){
    return <h1>{err}</h1>
   }

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
      <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      
      
      
 
    
    </div>
  );
}

export default App;
