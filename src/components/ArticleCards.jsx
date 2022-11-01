import "../Styling/ArticleCard.css"

const ArticleCards = ({article}) => {

    return(

        <article id="articlecard">
            <p id="articletitle"><b><em>{article.title}</em></b></p>
            <span id="articlebody">{article.body} </span>
            <p id="topic"> topic: {article.topic} </p>
            <p id="articleauthor">Posted by {article.author} </p>




        </article>


    )

}

export default ArticleCards