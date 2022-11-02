import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById, getCommentsForArticles, increaseServerVotes, decreaseServerVotes } from "../apifunctions"

const SingleArticle = ({originalvotes}) => {

    const [article, setArticle] = useState([])
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(originalvotes)  
    const [error, setError] = useState(null)
    const [comments, setComments] = useState([])


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
    .catch((err) => {
        console.log(err)
    })
}, [])

useEffect(() => {

    getCommentsForArticles(article_id)
    .then(({data: {articles}}) => {
        
        setComments(articles)

    })

}, [comments])
    if (error){
    return <p>{error}</p>
}
return (

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
        <h2>Comments</h2>
        {comments.map((comment, index) => {
            return <>
           
            <article id="comment">
                <p id="commentbody">{comment.body}</p>
                <p id ="commentauthor">Author: {comment.author}</p>
                <p id="votes">Votes: {comment.votes} </p> 
                <p id="topic"> Topic: {article.topic} </p>
            <p id="earticleauthor">Posted by {article.author} </p> 
            </article>
            
            </>

        })

        }
           

</div>

)


   
}







export default SingleArticle