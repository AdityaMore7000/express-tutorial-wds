const express = require('express');
const app = express();
app.set('view engine','ejs')
const userRouter = require('./routes/users')
app.get('/',(req,res)=>{
    res.render('index',{text:'world'})
})

app.use('/users',userRouter)

app.listen('3000',()=>{
    console.log('Listening on port 3000')
})