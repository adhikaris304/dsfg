const Express =require('express');
const bodyParser = require('body-parser');
const knex=require('knex');
const config=require('./knexfile.js');
const databaseClient=knex(config);
const upload = require('./upload.js');
const path=require('path');

const express =new Express();
express.use(Express.static(path.join(__dirname, 'public')));


function addUser(request, response){
    databaseClient('userTbl')
    .insert({
        userId:request.body.userId,
        userFname:request.body.userFname,
        userLname:request.body.userLname,
        username:request.body.username,
        password:request.body.password,
    })
    .then(data=>{
        console.log("data entered");
        response.json({status:'success'})
    })      
    .catch(err=>{
        response.json({status:'fail'})
    })
}
function SendUser(request, response){
    databaseClient('itemsTbl')
    .select('*')
    .then(data=>{
        response.json(data);
        console.log(data);

    })
    .catch(err=>{
        response.json({status:'fail'})
    })
};

function addItem(request, response){
    databaseClient('itemsTbl')
        .insert({
            itemName:request.body.itemName,
            itemPrice:request.body.itemPrice,
            itemDesc:request.body.itemDesc,
            itemImage:request.body.itemImage

        })
        .then(data=>{
            console.log("data entered");
            response.json({status:'success'})
        })      
        .catch(err=>{
            response.json({status:'fail'})
        })
    }
    
function sendItem(request, response){
    databaseClient('itemsTbl')
    .select('*')
    .then(data=>{
        response.json(data);
        console.log(data);

    })
    .catch(err=>{
        response.json({status:'fail'})
    })
}

//express.use('/upload', uploadRouter);
express.get('/items', sendItem)
express.post('/items', addItem)
express.get('/users', SendUser)
express.post('/items', addUser)


express.use(bodyParser.json());
express.listen(4000, 'localhost',()=>{
    console.log("running")
})