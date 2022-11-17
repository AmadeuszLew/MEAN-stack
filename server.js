var express = require('express');
var mongojs=require('mongojs');
var bodyParser= require('body-parser')

var app=express()
var db= mongojs('clientslist',['clientslist'])
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json())
app.get('/clientslist',function(req,res){
    console.log("I received a GET request")
    db.clientslist.find(function(err,docs){
        console.log(docs);
        res.json(docs);
    })
})

app.post('/clientslist', function(req,res){
    console.log(req.body);
    db.clientslist.insert(req.body,function(err,doc){
        res.json(doc);
    })
})
app.delete('/clientslist/:id',function(req,res){
    var id=req.params.id
    console.log(id);
    db.clientslist.remove({_id:mongojs.ObjectID(id)}, function(err,doc){
        res.json(doc);
    })
})
app.listen(3000);
console.log("server running on port 3000;")