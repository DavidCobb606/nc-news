import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../apifunctions"


const SingleArticle = () => {
const [article, setArticle] = useState([])
const {article_id} = useParams()
console.log(article_id)

useEffect(() => {

    getArticleById(article_id)
    .then(({data: {articles}}) => {
        console.log(articles)

        setArticle(articles)
    })
    .catch((err) => {
        console.log(err)
    })
}, [article_id])
console.log(article)

return (

<div>

    <h2>Rendering {article_id} </h2>

  {
    article.map((element) => {
        return element
    })

  }
</div>

)

}

export default SingleArticle