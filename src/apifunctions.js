import axios, {AxiosHeaders} from "axios";
import { UNSAFE_enhanceManualRouteObjects } from "react-router-dom";

export const getAllArticles = () => {

    return axios.get("https://backend-server-6006.herokuapp.com/api/articles")
    .then((res)=>{        
        return res
    })
}

export const getArticlesByTopic = (topic_id) => {

    return axios.get(`https://backend-server-6006.herokuapp.com/api/articles/?topic=${topic_id}`)
}


export const getArticleById = (article_id) => {
    return axios.get(`https://backend-server-6006.herokuapp.com/api/articles/${article_id}`)
    .then((res) =>{
        
   
        return res
    })    
}

export const getCommentsForArticles = (article_id) => {
    return axios.get(`https://backend-server-6006.herokuapp.com/api/articles/${article_id}/comments`)
    .then((res) => {
        
        return res
    })
}
export const increaseServerVotes = (article_id) => {

    return axios.patch(`https://backend-server-6006.herokuapp.com/api/articles/${article_id}`, {inc_votes: 1 })
    .then((res) => {
 
       return res
        })
}

export const decreaseServerVotes = (article_id, votes) => {

    return axios.patch(`https://backend-server-6006.herokuapp.com/api/articles/${article_id}`, {inc_votes: -1 })
    .then((res) => {
   
       return res
        })
}

export const postComment = (article_id, newComment) => {
    
      return axios.post(`https://backend-server-6006.herokuapp.com/api/articles/${article_id}/comments`, {body: newComment, author: "cooljmessy"})
    .then((res) => {
      
        return res
    })
    .catch((error) => {
       return error
    })
}

export const deleteCommentFromServer = (article_id, comment_id) => {


    return axios.delete(``)

}

