import ArticleCards from "./ArticleCards"
import { useEffect } from "react"

const FootballArticles= ({articles}) => {
return (
  <div>
    <h1> Football Articles</h1>

   <ul> 
    {articles.map((article, index) => {
        if (article.topic==="football"){
        return  <ArticleCards key={index} article={article}/>
        }            
        })}
    </ul>
  </div>        
    )
}

export default FootballArticles