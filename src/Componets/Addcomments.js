import React, {useState} from "react";

const Addcomments = ({articleName, setArticleInfo}) => {
     const [username, setUsername ] = useState('');
     const [commentText, setCommentText] = useState('');

     const addComment = async () =>{
         const result = await fetch(`/api/articles/${articleName}/add-comments`, {
             method: 'post',
             body: JSON.stringify({username, Text: commentText}),
             headers: {
                 'Content-Type': 'application/json',
             }
         });
         const body = await result.json();
         setArticleInfo(body);
         setUsername('');
         setCommentText('');


     }


    return (
        <div id="add-comment-form">
            <label>
                Name:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
                Comments:
                <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
            </label>
            <button onClick={() => addComment()}>Add Comments</button>
        </div>

    )
}

export default Addcomments;