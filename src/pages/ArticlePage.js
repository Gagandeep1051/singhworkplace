import React, {useState, useEffect} from "react";
import articles from "./content";
import {useParams} from 'react-router-dom';
import CommentsList from "../Componets/CommentsList";
import UpvoteSections from "../Componets/UpvoteSections";
import ArticlesList from "../Componets/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import Addcomments from "../Componets/Addcomments";




const ArticlePage = ({}) =>{
    const {name} = useParams();

    const [articleInfo, setArticleInfo] = useState({votes:0, comments: []})

    useEffect(() => {
            const fetchdata = async () => {
                const result = await fetch(`/api/articles/${name}`);
                const body = await result.json();
                setArticleInfo(body);
                console.log(body);
            }
        fetchdata();
    }, [name] );



    const article = articles.find(article => article.name === name);

    if(!article) return <NotFoundPage />
    const otherArticles =articles.filter(article => article.name !== name);
    
    return (
        <div>
            <h1>{article.title} </h1>
            <h3>{article.author}</h3><br></br>
            <UpvoteSections articleName={name} votes={articleInfo.votes} setArticleInfo={setArticleInfo} /> <br></br>
            {article.content.map((paragraph, key) =>(
                <p key={key}>{paragraph}</p>
            ))} 
            <p></p>
            
            {article.ReadAricle.map((summary, key) =>(
                <p key={key}>{summary}</p>
            ))}
            <p></p>

            <h4>{article.Link}</h4>

            <Addcomments articleName={name} setArticleInfo={setArticleInfo} />

            <CommentsList comments={articleInfo.comments} />

            <h2>Other Articles:</h2>
            <ArticlesList Article={otherArticles}/>
        </div>


    )
}

export default ArticlePage;