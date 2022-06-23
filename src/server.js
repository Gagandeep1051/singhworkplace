import express from "express";
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import * as path from "path";



const app = express();
require('dotenv').config();
const mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '/build')));




const withdb =async (operations, res) => {
    try {
        //'mongodb://localhost:27017'
        //process.env.REACT_APP_NOT_SECRET_CODE
        const client = await MongoClient.connect(process.env.REACT_APP_NOT_SECRET_CODE, 
                { useNewUrlParser: true, 
                useUnifiedTopology: true, });
        const db = client.db("my-blog");

        await operations(db);
        await client.close();

    } catch (error) {
        res.status(500).json({message:'error connecting to db', error});
    }

}


app.get('/api/articles/:name', async (req, res) => {
    await withdb(async (db) => {
        const articleName = req.params.name;

        const articleInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).json(articleInfo);

    }, res);

});




app.post('/api/articles/:name/votes', async (req, res) => {
    await withdb(async (db) => {
        const articleName = req.params.name;

        const articleInfo = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne({name: articleName},
            {
                "$set": {
                    votes: articleInfo.votes + 1,
                },
            });
        const updatedArticlesInfo = await db.collection('articles').findOne({name: articleName});

        return res.status(200).json(updatedArticlesInfo);
    },res);


})

app.post('/api/articles/:name/add-comments',async (req, res) => {

    const {username, Text} = req.body;
    const articleName = req.params.name;
    await withdb(async (db) => {
        const articleInfo = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne({name: articleName}, {
            '$set': {
                comments: articleInfo.comments.concat({username, Text}),
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({name: articleName})
        res.status(200).json(updatedArticleInfo);

    }, res);


})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

const port = process.env.PORT || 8000;

if(process.env.NODE_ENV === "production"){
    app.use(express.static('build'));
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname + '/build/index.html'));
    })
}


app.listen(port, "0.0.0.0", () => console.log("listening on 8000"));