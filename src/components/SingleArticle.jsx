import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById, getCommentsForArticles } from "../apifunctions"
import ArticleCards from "./ArticleCards"



const SingleArticle = () => {

const [article, setArticle] = useState([])
const {article_id} = useParams()
const [isLoading, setIsLoading] = useState(false)
const [comments, setComments] = useState([])

console.log(article_id)

useEffect(() => {

    getArticleById(article_id)
    .then(({data: {articles}}) => {      

        setArticle(articles)

    })
    .catch((err) => {
        console.log(err)
    })
}, [article_id])

useEffect(() => {

    getCommentsForArticles(article_id)
    .then(({data: {articles}}) => {
        
        setComments(articles)

    })

}, [comments])

return (

<div>

    
    <ul> 
        {article.map((article, index) => {           
            return <>               
                   <article id="articlecard">
            <p id="articletitle"><b><em>{article.title}</em></b></p>
            <span id="articlebody">{article.body} </span>
            <p id="topic"> topic: {article.topic} </p>
            <p id="earticleauthor">Posted by {article.author} </p> <p id="comments"> {}</p>
            </article>
            </>                 
        })} 
        <h2>Comments</h2>
        {comments.map((comment, index) => {
            return <>
           
            <article id="comment">
                <p id="commentbody">{comment.body}</p>
                <p id ="commentauthor">Author: {comment.author}</p>
                <p id="votes">Votes: {comment.votes} </p>
            </article>
            
            </>

        })

        }
    </ul>

</div>

)

}

export default SingleArticle