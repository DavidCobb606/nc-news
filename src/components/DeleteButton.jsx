import { useEffect, useState } from "react"
import { deleteCommentFromServer } from "../apifunctions"

const DeleteButton = ({comment_id, deletedComment, setCommentsToDelete}) => {

    const [isLoading, setIsLoading] = useState(false)
    
    
    const deleteFunction = () => {
        
        setIsLoading(true)
        deleteCommentFromServer(comment_id)
        .then((res)=>{
            
            setCommentsToDelete(res)
            setIsLoading(false)
        })
    }

    if(isLoading) return <h3>Deleting, please wait</h3>

return (
<div>

<button onClick={deleteFunction}>Delete</button>


</div>
)

}



export default DeleteButton