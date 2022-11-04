import { useState } from "react"
import { deleteCommentFromServer } from "../apifunctions"

const DeleteButton = ({comment_id, setCommentsToDelete}) => {

    const [isLoading, setIsLoading] = useState(false)
    
    
    const handleDelete = () => {
        
        setIsLoading(true)
        deleteCommentFromServer(comment_id)
        .then((res)=>{
            
            setCommentsToDelete(res)
           setIsLoading(false)
        })
    }

    if(isLoading) return <span className="loader"></span>

return (
<div>

<button class="deletebutton" onClick={handleDelete}>Delete</button>


</div>
)

}



export default DeleteButton