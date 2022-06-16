import React from "react";



const CommentsList = ({comments}) =>(
    <>
        <h2>Comments:</h2>
        {comments.map((comments, key) =>(
            <div className="comment" key={key}>
                <h4>{comments.username}</h4>
                <p>{comments.Text}</p>
            </div>
        ))}
    </>
)

export default CommentsList;