import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import { getArticlesByTopic } from "../apifunctions";
import ArticleCards from "./ArticleCards";

const ArticlesByTopic = ({articles}) => {

  const [topic, setTopic] = useState([]);
  const {topic_id} = useParams()

  console.log(topic_id)
  useEffect(() => {

    getArticlesByTopic(topic_id)
    .then(({data: {articles}}) => {
        console.log(articles)
    })

  })
  
  return(
<div>
    <h1> {topic_id} Articles</h1>
    <ul>
        {articles.map((article, index) => {
            if (article.topic===topic_id){
                return <ArticleCards key={index} article={article}/>
            }
        })}
        
    </ul>
</div>

  )


}


export default ArticlesByTopic