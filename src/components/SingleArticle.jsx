import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById, getVotes } from "../apifunctions"
import ArticleCards from "./ArticleCards"
import { alterServerVotes } from "../apifunctions"
import UpvoteButton from "./UpvoteButton"


const SingleArticle = () => {

    const [article, setArticle] = useState([])
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(0)  

 

    const updateVotes = () => {

        setVotes((votes) => votes+1)
        alterServerVotes(article_id, votes)
        .then(({data: {articles}})=> {
            
            return setVotes(articles.votes)
        })

      } 
 console.log(votes)

useEffect(() => {

    getArticleById(article_id)
    .then(({data: {articles}}) => {
       return setArticle(articles)
       
    })
    .catch((err) => {
        
    })
}, [article_id])

// if (isLoading){
//     return <h2>Loading...</h2>
// }
console.log(votes)

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
            
 
 <UpvoteButton articlevotes={article.votes}/>


 <div className="votemiddle"><h2>Votes: {votes}</h2> </div>
        <button className="vote" id="like" onClick={updateVotes}>Like</button>
            
        <button className="vote" id="dislike" onClick={updateVotes}>Dislike </button>
        </article>
            </div>           
                  
        })}        
    </ul>

</div>

)

}

export default SingleArticle