import { useState } from "react"
import { postComment } from "../apifunctions"
import "../Styling/PostComments.css"


const PostComments = ({setNewComment, article_id, setIsLoading, newComment, setAdditionalComments}) => {

    const [error, setError] = useState(null)

    const handleSubmit = (event) => {
      setIsLoading(true)
        postComment(article_id, newComment)
          .then(({data:articles}) => {
            setAdditionalComments(articles.comments)
            setIsLoading(false)            
                })
          .catch((err) => {
            setError(err)
                })
      event.preventDefault()
    }   

    if(error) return error

    return(
        <div>
            <h2>Comments</h2>
                
            <form onSubmit={handleSubmit}>
              
                <label id="writecommentinfo"><h3><em>Write your comment below. Increase textbox size by dragging on the bottom right corner.</em> </h3></label><br></br>
                <textarea id="postcommentbox"required onChange={(event) =>setNewComment(event.target.value)}></textarea><br/>
                <button  id="submitcommentbutton" type="submit" >Submit </button>                    
        
            </form>
        </div>
    )
}

export default PostComments