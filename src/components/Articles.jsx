import "../Styling/ArticleList.css";
import {useEffect, useState} from "react";
import {getAllArticles} from "../apifunctions"
import ArticleCards from "./ArticleCards";

const ArticleList = ({articles}) => {
return(     
 <div>
    <h1>All Articles</h1>
    


    <ul>    
        {articles.map((article, index) => {
            return  <ArticleCards key={index} article={article} articles={articles}/>
                  
            })}
    </ul>
 </div>
)
}

export default ArticleList
