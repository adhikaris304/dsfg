const path =require('path')
module.exports={
    client:'pg',
    connection:{
        host:'localhost',
        user:'suman',
        password:'suman',
        database:'online_clothing'
    },
    migration:{
        tablename:'migrations',
        directory:path.resolve(__dirname, './migration')   

    },
    userNullDefault:true
};