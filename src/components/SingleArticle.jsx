import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById, getVotes } from "../apifunctions"
import ArticleCards from "./ArticleCards"
import { alterServerVotes } from "../apifunctions"
import UpvoteButton from "./UpvoteButton"
import { increaseServerVotes } from "../apifunctions"
import { decreaseServerVotes } from "../apifunctions"


const SingleArticle = ({originalvotes}) => {

    const [article, setArticle] = useState([])
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(originalvotes)  
    const [error, setError] = useState(null)



    const upVote = () => {

        setVotes((votes) => votes+1)
        increaseServerVotes(article_id, votes)
        .catch((err) => {
            setVotes((votes) => votes-1)
            setError("Something went wrong, please try again")
        })

    } 

    const downVote = () => {
        
        setVotes((votes) => votes-1)
        decreaseServerVotes(article_id, votes)
        .catch((err) => {
            setVotes((votes) => votes+1)
            setError("Something went wrong, please try again")
        })

    }

useEffect(() => {

    getArticleById(article_id)
    .then(({data: {articles}}) => {        
        setVotes(articles[0].votes)
        setArticle(articles)
        setIsLoading(false)
    })
    
   
}, [])




if (error){
    return <p>{error}</p>
}

return (<div>



    
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
        <button className="vote" id="like" onClick={upVote}>Like</button>
            
        <button className="vote" id="dislike" onClick={downVote}>Dislike </button>
        </article>
            </div>           
                  
        })}        
    </ul>

</div>

)

}

export default SingleArticle