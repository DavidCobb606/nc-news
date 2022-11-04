import { useState } from "react"
import { increaseServerVotes } from "../apifunctions"
import { decreaseServerVotes } from "../apifunctions"


const SingleArticleCard = ({article, article_id}) => {

    const [votes, setVotes] = useState(0)  
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
    if (error){
        return <p>{error}</p>
        }
return(
    <div>
         {article.map((article, index) => {           
            return <>               
                   <article id="articlecard">
            <p id="articletitle"><b><em>{article.title}</em></b></p>
            <span id="articlebody">{article.body} </span>
            <p id="topic"> topic: {article.topic} </p>
            <p id="earticleauthor">Posted by {article.author} </p> <p id="comments"> {}</p>  
            <div className="votemiddle"><h2>Votes: {votes}</h2> </div>
        <button className="vote" id="like" onClick={upVote}>Like</button>
            
        <button className="vote" id="dislike" onClick={downVote}>Dislike </button>
            </article> 
                   
            
            </>                 
        })} 
    </div>
)

}

export default SingleArticleCard