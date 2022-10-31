import axios, {AxiosHeaders} from "axios";

export const getAllArticles = () => {

    return axios.get("https://backend-server-6006.herokuapp.com/api/articles")
    .then((res)=>{
        
        return res
    })

}
