import express from "express";
import request  from "request";
//import cron  from 'node-cron';

import qs  from "qs";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});
var minutes = 1/60, the_interval = minutes * 60 * 1000;
function deletePost(comment) {
    
    request({
        url: "https://anime-ar.com/otaku/h1.php?page=deletePost",
        method: "POST",
        //json: true,   // <--Very important!!!
        body: qs.stringify({
          email:"nebonib559@evimzo.com", password:"00000000",
            userId: '216033',
            id: comment.id
          }),
    headers: {"Content-Type": "application/x-www-form-urlencoded",
    'User-Agent': 'SevenZero','useragent': 'SevenZero'
  },
    }, function (error, response, body){
        if(response.statusCode==200){
            let json = JSON.parse(response.body);
            
            console.log(json.message);}
    });
}
function sendPost() {
     let postData={  post: "............................................................................................................", hasFire: !1, hasAnime: !1, hasImage: "", anime: [], youtube: "", userAddress: '0.0.0.0' } ;
      let body ={
      email:"nebonib559@evimzo.com", password:"00000000", useragent: "SevenZero",item:
      btoa(unescape(encodeURIComponent(JSON.stringify(postData)))), android: false};
     
    request({
        url:"https://anime-ar.com/otaku/h1.php?page=sendPost",
        method: "POST",
        //json: true,   // <--Very important!!!
        body:  qs.stringify(body),
    headers: {"Content-Type": "application/x-www-form-urlencoded",
    'User-Agent': 'SevenZero','useragent': 'SevenZero'
  },
    }, function (error, response, body){
        if(response.statusCode==200){
            let json = JSON.parse(response.body);
            console.log(json.message);
    }
    });
}


setInterval(function() {
    //var myJSONObject = { ... };
    console.log('Starting.........');
    try {
   //   sendPost();
        request({
        url: "https://anime-ar.com/otaku/h1.php?page=post",
        method: "GET",//"POST",
       // json: true,   // <--Very important!!!
       // body: myJSONObject
        }, function (error, response, body){
        if(response.statusCode==200){
            let json = JSON.parse(response.body);
            let comments=json.list;
            for (const key in comments) {
                    const comment = comments[key];
                    //if (comment.userId==166500||comment.userId==127315||comment.userId==158858||comment.userId==138198||comment.userId==163245||comment.userId==27358||comment.userId==679||comment.userId==215240||comment.userId==39226||comment.userId==212031||comment.userId==55||comment.userId==8837||comment.userId==11||comment.userId==1) {
                      
              if (comment.userId==216033){
                  console.log(`If found a banded user @${comment.username}`);}
                        try {
                            deletePost(comment); 
                        } catch (error) {
                            console.log(`${error}`);
                        }
                //  }
                
            }
        }
       
    });
    } catch (error) {
        console.log(`${error}`);
    }
}, the_interval);

//cron.schedule('* * * * *', () => {});
var min = 10, the_interval2 = min * 60 * 1000;
setInterval(function() {
   console.log('Rstarting.........');
    try {
        request({
        url: "https://sanime-band.onrender.com/",
        method: "GET",
       
        }, function (error, response, body){
        if(response.statusCode==200){
           console.log('Rstart Completed.........');
        }
       
    });} catch (error) {
        console.log(`${error}`);
    }
}, the_interval2);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
