import "./Styling/General.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Nav from "./components/Nav"
import ArticleList from "./components/ArticleList";
import ArticlesByTopic from "./components/ArticlesByTopic";
import { useState, useEffect } from "react";
import { getAllArticles, getAllArticlesBySortQuery } from "./apifunctions";

import SingleArticle from "./components/SingleArticle";

function App() {
  const [articles, setArticles] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [openMenu, setOpenMenu] = useState(false)
  const [descending, setDescending] = useState(true)
  const [activeAsc, setActiveAsc] = useState("")
  const [activeDesc, setActiveDesc] = useState("active")
  const [activeDate, setActiveDate] = useState("active")
  const [activeVotes, setActiveVotes] = useState("")
  const [activeCommentCount, setActiveCommentCount] = useState("")
  const [orderByURL, setOrderByURL] = useState("?orderBy=desc")
  const [sortByURL, setSortByURL] = useState("&sort_by=created_at")


  const handleClickSortBy = () => {
    setOpenMenu(!openMenu)
  }

  const handleClickAsc = () => {
    setDescending(!descending)
   
    setActiveDesc("")
    setActiveAsc("active")
    setOrderByURL("?orderBy=asc")

  }

  const handleClickDesc = () => {
    setDescending(!descending)
    
    setActiveAsc("")
    setActiveDesc("active")
    setOrderByURL("?orderBy=desc")

  }

  const sortByDate = () => {
    setActiveCommentCount("")
    setActiveVotes("")
    setActiveDate("active")
    setSortByURL("&sort_by=created_at")

  }

  const sortByCommentCount = () => {
    setActiveVotes("")
    setActiveDate("")
    setActiveCommentCount("active")
    setSortByURL("&sort_by=comment_count")

  }

  const sortByVotes =() =>{
    setActiveCommentCount("")
    setActiveDate("")
    setActiveVotes("active")
    setSortByURL("&sort_by=votes")
  }


  useEffect(() => {
    getAllArticles(orderByURL, sortByURL)
      .then(({data: {articles}}) => {
        console.log("received")
         setArticles(articles)
         setIsLoading(false)
      }) 
   }, [orderByURL, sortByURL])

   console.log(articles)

   
 

   if (isLoading) return (<p> Loading...</p>)

  return (
    <div className="App">
     
      <Header/>
      <Nav/>
    <div id="descdropdown"><button id="ascdesc"className={activeDesc}onClick={handleClickDesc}>Descending</button>      
      </div> <div id="ascdropdown"> <button id="ascdesc"className={activeAsc}onClick={handleClickAsc}>Ascending</button>  
       
      <div id="dropdowndiv">  <button id="dropdown"onClick=               {handleClickSortBy}>Sort By</button> 

         
      </div>
        {openMenu ? (
        <ul className="menu">
          <li><button className={activeDate}id="smallerbutton" onClick={sortByDate}>Date </button></li>
          <li> <button id="smallerbutton"className={activeCommentCount} onClick={sortByCommentCount}>Comment Count</button> </li>
          <li> <button id="smallerbutton" onClick={sortByVotes} className={activeVotes}>Votes</button> </li>
          
        </ul>
      ): null } 
      </div>

      
    

      <Routes>      
      <Route path="/topics/:topic_id" element={<ArticlesByTopic orderByURL={orderByURL} sortByURL={sortByURL} articles={articles}/>}/>
      <Route path="/" element={<ArticleList articles={articles} />}/>
      
    
      <Route path="/articles/:article_id" element={<SingleArticle/>}/>
      </Routes>
      
      
      
 
    
    </div>
  );
}

export default App;
