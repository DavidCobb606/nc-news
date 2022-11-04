import DeleteButton from "./DeleteButton"


const CommentsCard = ({comments, setCommentsToDelete, commentsToDelete}) => {

    return (
        <div>
            {comments.map((comment, index) => {
            return <>           
                <article id="comment">
                    <h3 id="commentbody">{comment.body}</h3>
                    <p id ="commentauthor">Author: {comment.author}</p>
                    <p id="votes">Votes: {comment.votes} </p> 
                    <p id="articleauthor">Posted by {comment.author} </p> 
                    {comment.author === "cooljmessy" ? <DeleteButton comment_id={comment.comment_id} setCommentsToDelete={setCommentsToDelete} commentsToDelete={commentsToDelete}/> : null}
                </article>            
            </>
        })
        }
        </div>
    )
}
export default CommentsCard