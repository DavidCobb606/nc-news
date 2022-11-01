import axios, {AxiosHeaders} from "axios";

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
        console.log(res)
        return res
    })    
}

export const alterServerVotes = (votes, article_id) => {

    return axios.patch(`https://backend-server-6006.herokuapp.com/api/articles/${article_id}`, {inc_votes: votes })
    .then((res) => {
        console.log(res.data.articles.votes)
        return res
        })
}
