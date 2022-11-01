import ArticleCards from "./ArticleCards"
import ArticleList from "./ArticleList"

const CookingArticles = ({articles}) => {

return(<div>
    <h1> Cooking Articles</h1>
    <ul>
        {articles.map((article, index) => {
            if (article.topic==="cooking"){
                return <ArticleCards key={index} article={article}/>
            }
        })}
        
    </ul>
</div>

)

}

export default CookingArticles