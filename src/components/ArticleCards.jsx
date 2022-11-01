import "../Styling/ArticleCard.css"
import { Link } from "react-router-dom"

const ArticleCards = ({article}) => {

    const goToArticle = (event) => {
        return <Link id="goToArticle" key={10} to={`/articles/${article.article_id}`}></Link>
    }
    console.log(article.article_id)
    return(

        <div>
        <article id="articlecard">
            <p id="articletitle"><b><em>{article.title}</em></b></p>
            <span id="articlebody">{article.body} </span>
            <p id="topic"> topic: {article.topic} </p>
            <p id="articleauthor">Posted by {article.author} </p>
          <Link to={`/articles/${article.article_id}`}><button id="seearticlebutton">See full article</button></Link>
                
                

        </article>
  
        
</div>
    )

}

export default ArticleCards