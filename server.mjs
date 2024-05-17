import express from "express";
import request  from "request";
//import cron  from 'node-cron';

import qs  from "qs";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});
var minutes = 1/120, the_interval = minutes * 60 * 1000;
function deletePost(comment) {
    
    request({
        url: "https://anime-ar.com/otaku/h1.php?page=deletePost",
        method: "POST",
        //json: true,   // <--Very important!!!
        body: qs.stringify({
          email:"hacked.mebm@gmail.com", password:"hacked.mebm",
            userId: '216033',
            id: comment.id
          }),
    headers: {"Content-Type": "application/x-www-form-urlencoded",
  'useragent': 'SevenZero',
              'Sec-Ch-Ua-Mobile':
'?1',
'Sec-Ch-Ua-Platform':
"Android",
'Sec-Fetch-Dest':
'empty',
'Sec-Fetch-Mode':
'cors',
'Sec-Fetch-Site':
'same-site',
'User-Agent':
'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
  },
    }, function (error, response, body){
       /* if(response.statusCode==200){
            let json = JSON.parse(response.body);
            
            console.log(json.message);}*/
    });
}
function blockUsers(comment) {
    
    request({
        url: "https://anime-ar.com/otaku/h1.php?page=block",
        method: "POST",
        //json: true,   // <--Very important!!!
        body: qs.stringify({
          e:"yadal40736@evimzo.com", p:"00000000",
            userId: '216058',
            id: comment.userId
          }),
    headers: {"Content-Type": "application/x-www-form-urlencoded",
  'useragent': 'IBRAHIMSEVEN',
              'Sec-Ch-Ua-Mobile':
'?1',
'Sec-Ch-Ua-Platform':
"Android",
'Sec-Fetch-Dest':
'empty',
'Sec-Fetch-Mode':
'cors',
'Sec-Fetch-Site':
'same-site',
'User-Agent':'IBRAHIMSEVEN',
  },
    }, function (error, response, body){
        if(response.statusCode==200){
            let json = JSON.parse(response.body);
            
            console.log(json.message);}
    });
}

function sendPost() {
     let postData={  post: "﻿انا الذي سمتني امي عبود رجل مو مسوي واحد كيوت", hasFire: !1, hasAnime: !1, hasImage: "", anime: [], youtube: "", userAddress: '2.2.2.2' } ;
      let body ={
      email:"hacked.mebm@gmail.com", password:"hacked.mebm", useragent: "IBRAHIMSEVEN",item:
      btoa(unescape(encodeURIComponent(JSON.stringify(postData)))), android: true};
     
    request({
        url:"https://app.sanime.net/function/h10.php?page=sendPost",
        method: "POST",
        //json: true,   // <--Very important!!!
        body:  qs.stringify(body),
    headers: {"Content-Type": "application/x-www-form-urlencoded",
    'User-Agent': 'IBRAHIMSEVEN',//SevenZero',
  },
    }, function (error, response, body){
        if(response.statusCode==200){
            let json = JSON.parse(response.body);
            console.log(json.message);
    }
    });
}
function sendMessage() {
      let body ={
      email:"hacked.mebm@gmail.com", password:"hacked.mebm",m: 
       btoa(unescape(encodeURIComponent("﻿انا الذي سمتني امي عبود رجل مو مسوي واحد كيوت"))) } ;
     
    request({
        url:"https://app.sanime.net/secure/chat/send.php",
        method: "POST",
        //json: true,   // <--Very important!!!
        body:  qs.stringify(body),
    headers: {"Content-Type": "application/x-www-form-urlencoded",
    'User-Agent': 'IBRAHIMSEVEN',//SevenZero',
  },
    }, function (error, response, body){
        if(response.statusCode==200){
          //  let json = JSON.parse(response.body);
          //  console.log(json.message);
          console.log(response.body);
    }
    });
}

setInterval(function() {
    //var myJSONObject = { ... };
    //console.log('Starting.........');
    try {
  sendPost();
      sendMessage();
     /* request({
        url: "https://app.sanime.net/function/h10.php?page=getPost",
        method: "GET",//"POST",
       // json: true,   // <--Very important!!!
       // body: myJSONObject
        }, function (error, response, body){
       // if(response.statusCode==200){
            let json = JSON.parse(response.body);
            let comments=json.list;
            for (const key in comments) {
                    const comment = comments[key];
                   // if (comment.userId==166500||comment.userId==127315||comment.userId==158858||comment.userId==138198||comment.userId==163245||comment.userId==27358||comment.userId==679||comment.userId==215240||comment.userId==39226||comment.userId==212031||comment.userId==55||comment.userId==8837||comment.userId==11||comment.userId==1) {
                      
                 // console.log(`If found a banded user @${comment.username}`);}
                    if (comment.userId==216058){  
                 try {
                            deletePost(comment); 
                        } catch (error) {
                            console.log(`${error}`);
                        }}
                
            }
       // }
       
    });*/
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
