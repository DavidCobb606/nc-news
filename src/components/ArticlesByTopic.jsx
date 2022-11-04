import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import { getArticlesByTopic } from "../apifunctions";
import ArticleCards from "./ArticleCards";

const ArticlesByTopic = ({articles, sortByURL, orderByURL}) => {

  const [topic, setTopic] = useState([]);
  const [err, setErr] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const {topic_id} = useParams()

  useEffect(() => {

    getArticlesByTopic(topic_id, orderByURL, sortByURL)
    .then(({data: {articles}}) => {
        setTopic(articles)
        setIsLoading(false)
    })
    .catch((err) => {      
        setErr(true)
    })

  }, [topic_id, orderByURL, sortByURL])
  
  if (err) return <h1>Bad Request</h1>

  if (isLoading) return  <span className="loader"></span>  
 
  return(
    <div>
      <h1> {topic_id} Articles</h1>    
      <ul>
        {topic.map((article, index) => {           
            return <ArticleCards key={index} article={article}/>            
        })}
        
      </ul>
    </div>
  )
}

export default ArticlesByTopic