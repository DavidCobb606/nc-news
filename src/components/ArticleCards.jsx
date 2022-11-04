import "../Styling/ArticleCard.css"
import { Link } from "react-router-dom"
import { useState } from "react"

const ArticleCards = ({article}) => {

    const [isLoading, setIsLoading] = useState(null)

    const seeFullArticle= () => {
        setIsLoading(true)

    }


    return(

        <div>
            
      
        <article id="articlecard">
            <p id="postedby">Posted by {article.author === "cooljmessy" ? <>you</>: article.author}</p>
            <p id="articletitle"><b><em>{article.title}</em></b></p>
            <span id="articlebody">{article.body} </span>
          
            <p>Number of comments: {article.comment_count}
            <br></br>Votes: {article.votes} <br></br>
            Posted on <em>{article.created_at.slice(0,10)}</em> at <em>{article.created_at.slice(11,19)}</em></p>
          <Link to={`/articles/${article.article_id}`}><button id="seearticlebutton" onClick={seeFullArticle}>See full article</button></Link>              
                

        </article>
  
        
</div>
    )

}

export default ArticleCards