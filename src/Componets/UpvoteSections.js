import React from "react";

const UpvoteSections = ({articleName, votes, setArticleInfo}) => {
    const upvoteArticle = async () =>{
        const result = await fetch(`/api/articles/${articleName}/votes`, {
            method: 'POST',
        });
        const body = await result.json();
        setArticleInfo(body);
    }


    return (
            <div id="upvotes-section">
                <button onClick={ () => upvoteArticle()}>Add Vote</button>
                <p>This post has been Upvote {votes} times</p>
            </div>
        );
}




export default UpvoteSections;