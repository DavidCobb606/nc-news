import { useState } from "react"
import { increaseServerVotes } from "../apifunctions"
import { decreaseServerVotes } from "../apifunctions"
import "../Styling/singlearticlecard.css"


const SingleArticleCard = ({article, article_id, votes, setVotes}) => {
 
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
            <p id="postedby">Posted by {article.author === "cooljmessy" ? <>you</>: article.author}</p>
           
            <p id="articletitle"><b><em>{article.title}</em></b></p>
            <span id="articlebody">{article.body} </span>
           
             <p id="comments"> {}</p>  
            <div className="votemiddle"><h2>Votes: {votes}</h2> </div>
        <button className="vote" id="voteup" onClick={upVote}>Vote Up</button> <button className="vote" id="votedown" onClick={downVote}>Vote Down </button>
            </article> 
                   
            
            </>                 
        })} 
    </div>
)

}

export default SingleArticleCard