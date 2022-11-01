import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../apifunctions"
import ArticleCards from "./ArticleCards"
import { alterServerVotes } from "../apifunctions"


const SingleArticle = () => {

    const [article, setArticle] = useState([])
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(false)
   
    const [votes, setVotes] = useState(0)

    useEffect(() => {
        
        alterServerVotes(votes, article_id)
        .then(({data: {articles}}) => {
           
            setVotes(articles.votes)
        })
        
    }, [votes])
  console.log(votes)

useEffect(() => {

    getArticleById(article_id)
    .then(({data: {articles}}) => {
       

        setArticle(articles)

    })
    .catch((err) => {
        
    })
}, [article_id])


return (

<div>

    
    <ul>
        {article.map((article, index) => {           
            return <div>
               
                   <article id="articlecard">
            <p id="articletitle"><b><em>{article.title}</em></b></p>
            <span id="articlebody">{article.body} </span>
            <p id="topic"> Topic: {article.topic} </p>
            <p id="earticleauthor">Posted by {article.author} </p>
            
 <div className="votemiddle"><h2>Votes: {votes}</h2> </div>
        <button className="vote" id="like" onClick={() => {setVotes(votes+1)}}>Like</button>
            
        <button className="vote" id="dislike" onClick={() => {setVotes(votes-1)}}>Dislike </button>
        </article>
       

       
  


            </div>
            
                  
        })}
        
    </ul>

</div>

)

}

export default SingleArticle