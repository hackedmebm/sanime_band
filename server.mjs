import express from "express";
import request  from "request";

import qs  from "qs";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});
var minutes = 1/5, the_interval = minutes * 60 * 1000;
function deletePost(comment) {
    
    request({
        url: "https://app.sanime.net/function/h10.php?page=deletePost",
        method: "POST",
        //json: true,   // <--Very important!!!
        body: qs.stringify({
            password: 112233445566,
            email: "bdc904d822@emailabox.pro",
            userId: 214913,
            id: comment.id
          }),
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    }, function (error, response, body){
        if(response.statusCode==200){
            let json = JSON.parse(response.body);
            console.log(`User: ${comment.username}\nId: ${comment.userId}`)
            console.log(json.message);}
    });
}
setInterval(function() {
    //var myJSONObject = { ... };
    console.log('Starting.........');
    try {
        request({
        url: "https://app.sanime.net/function/h10.php?page=getPost",
        method: "GET",//"POST",
       // json: true,   // <--Very important!!!
       // body: myJSONObject
        }, function (error, response, body){
        if(response.statusCode==200){
            let json = JSON.parse(response.body);
            let comments=json.list;
            for (const key in comments) {
                    const comment = comments[key];
                    if (comment.userId==212031||comment.userId==55) {
                        console.log(`If found a banded user @${comment.username}`);
                        try {
                            deletePost(comment); 
                        } catch (error) {
                            console.log(`${error}`);
                        }
                    }
                
            }
        }
       
    });} catch (error) {
        console.log(`${error}`);
    }
}, the_interval);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});