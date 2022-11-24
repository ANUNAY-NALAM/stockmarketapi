const express=require('express');
const app=express()
const exphbs=require('express-handlebars');
const path=require('path');

const PORT= process.env.PORT|| 5000;

//set Handlbars Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

const otherstuff="hellpo this other stuff"
//Set handlebar routes
app.get('/', (req, res) => {
    res.render('home',{
        stuff:otherstuff
    });
});
//Set static folder
app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT,()=>console.log(`server on port:${PORT}`))