import React from "react";
import articles from "./content";
import ArticlesList from "../Componets/ArticlesList";


const ArticleListPage = () =>{
    return (
        <div>
            <h1> Short Stories and Riddles </h1> <br></br>
            <ArticlesList Article={articles} />
        </div>

    )
}

export default ArticleListPage;