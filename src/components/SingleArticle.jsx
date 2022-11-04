import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById, getCommentsForArticles} from "../apifunctions"
import "../Styling/singlearticle.css"
import CommentsCard from "./CommentsCard"
import SingleArticleCard from "./SingleArticleCard"
import PostComments from "./PostComments"

const SingleArticle = ({users}) => {

    const [article, setArticle] = useState([])
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(0)  
    const [error, setError] = useState(null)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")
    const [additionalComments, setAdditionalComments] = useState()
    const [commentsToDelete, setCommentsToDelete] = useState("")

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id)
        .then(({data: {articles}}) => {        
            setVotes(articles[0].votes)
            setArticle(articles)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err)
        })
    }, [])

    useEffect(() => {
        setIsLoading(true)
        getCommentsForArticles(article_id)
        .then(({data: {articles}}) => {
            setComments(articles)
            })
            setIsLoading(false)
    }, [additionalComments, commentsToDelete])

    if(isLoading) return <h2 className="loader"></h2>
    
    if(error) return <h2>{error}</h2>
return (

<div>    
   
    <SingleArticleCard article={article} votes={votes} article_id={article_id} setVotes={setVotes}/>    
    
    <PostComments users={users}setIsLoading={setIsLoading} newComment={newComment} setAdditionalComments={setAdditionalComments} article_id={article_id}setNewComment={setNewComment}/>
    
    <CommentsCard comments={comments} setCommentsToDelete={setCommentsToDelete} commentsToDelete={commentsToDelete}/>          

</div>

    )   
}

export default SingleArticle