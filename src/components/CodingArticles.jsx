import ArticleList from "./ArticleList"
import ArticleCards from "./ArticleCards"


const CodingArticles = ({articles}) => {

  return (
    <div>
        <h1> Coding Articles</h1>

        <ul>
            {articles.map((article, index) => {
                if (article.topic==="coding"){
                    return <ArticleCards key={index} article={article}/>
                }
            })}

        </ul>


    </div>
     
    )

}


export default CodingArticles