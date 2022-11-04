import DeleteButton from "./DeleteButton"
import "../Styling/commentbox.css"


const CommentsCard = ({comments, setCommentsToDelete, commentsToDelete}) => {

    return (
        <div>
            {comments.map((comment, index) => {
            return <>           
                <article id="comment">
                    <p id="commentbody">{comment.body}</p>
                    <p class="commentdetails"> {comment.votes} Votes <br/>
                    Posted by {comment.author === "cooljmessy" ? <>you</>: comment.author} on {comment.created_at.slice(0, 10)} at {comment.created_at.slice(11, 19)}</p> 

                    {comment.author === "cooljmessy" ? <DeleteButton comment_id={comment.comment_id} setCommentsToDelete={setCommentsToDelete} commentsToDelete={commentsToDelete}/> : null}
                </article>            
            </>
        })
        }
        </div>
    )
}
export default CommentsCard