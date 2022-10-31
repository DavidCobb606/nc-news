import "../Styling/ArticleList.css";
import {useEffect, useState} from "react";
import {getAllArticles} from "../apifunctions"
import ArticleCards from "./ArticleCards";
import FootballArticles from "./FootballArticles";
import { BrowserRouter, Route, Routes } from "react-router-dom";





const ArticleList = () => {
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

return(
    <div>
      
        <Routes>
            <Route path="/topics/football" element={<FootballArticles/>}/>
        </Routes>       
       

    
    
    <ul> 
   
        {articles.map((article, index) => {
            
            return  <ArticleCards key={index} article={article}/>
            
           
        })}

    </ul>
    </div>
 





)

}

export default ArticleList
