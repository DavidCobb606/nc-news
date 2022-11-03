import axios, {AxiosHeaders} from "axios";
import { UNSAFE_enhanceManualRouteObjects } from "react-router-dom";

const myApi = axios.create({
    baseURL: `https://backend-server-6006.herokuapp.com/api`
})

export const getAllArticles = (orderByURL,sortByURL) => {

    return myApi.get(`/articles/`+orderByURL+sortByURL)
    .then((res)=>{ 
           
        return res
         
    })
}

export const getArticlesByTopic = (topic_id, orderByURL, sortByURL) => {

    return myApi.get(`/articles/?topic=${topic_id}`+"&" + orderByURL.slice(1)+sortByURL)
}


export const getArticleById = (article_id) => {
    return myApi.get(`/articles/${article_id}`)
    .then((res) =>{      
   
        return res
    })    
}

export const getCommentsForArticles = (article_id) => {
    return myApi.get(`/articles/${article_id}/comments`)
    .then((res) => {
        
        return res
    })
}
export const increaseServerVotes = (article_id) => {

    return myApi.patch(`/articles/${article_id}`, {inc_votes: 1 })
    .then((res) => {
 
       return res
        })
}

export const decreaseServerVotes = (article_id, votes) => {

    return myApi.patch(`/articles/${article_id}`, {inc_votes: -1 })
    .then((res) => {
   
       return res
        })
}

export const postComment = (article_id, newComment) => {
    
      return myApi.post(`articles/${article_id}/comments`, {body: newComment, author: "cooljmessy"})
    .then((res) => {
      
        return res
    })
    .catch((error) => {
       return error
    })
}

export const deleteCommentFromServer = ( comment_id) => {


    return myApi.delete(`/comments/${comment_id}`)
    .then((res) => {
        return res
    })

}

