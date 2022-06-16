import React from "react";
import {Link} from "react-router-dom";



const ArticlesList = ({ Article }) => {
    return (
        <>
            <h1>Articles</h1>
            {Article.map((article, key) => {
                return (
                <Link className="article-list-item" key={key} to={`/Article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0,150)}...</p>
                </Link>
                )
            })}

        </>
    );
}

export default ArticlesList;