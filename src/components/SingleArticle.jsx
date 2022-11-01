import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../apifunctions"
import ArticleCards from "./ArticleCards"


const SingleArticle = () => {
const [article, setArticle] = useState([])
const {article_id} = useParams()
const [isLoading, setIsLoading] = useState(false)
console.log(article_id)

useEffect(() => {

    getArticleById(article_id)
    .then(({data: {articles}}) => {
        console.log(articles)

        setArticle(articles)

    })
    .catch((err) => {
        console.log(err)
    })
}, [article_id])
console.log(article.title)

return (

<div>

    
    <ul>
        {article.map((article, index) => {           
            return <div>
               
                   <article id="articlecard">
            <p id="articletitle"><b><em>{article.title}</em></b></p>
            <span id="articlebody">{article.body} </span>
            <p id="topic"> topic: {article.topic} </p>
            <p id="earticleauthor">Posted by {article.author} </p>
            

        </article>


            </div>
            
                  
        })}
        
    </ul>

</div>

)

}

export default SingleArticle