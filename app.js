const express = require('express')
const app = express();
const path = require('path')

const publicPath = path.resolve(__dirname,"./public")

app.use(express.static(publicPath))

//Render establece un puerto por defecto, por lo que este bloque debe ser reemplazado
/*app.listen(3000, () => {
    console.log("Server is running");
})*/

const port = process.env.port || 3001;
app.listen(port, () => {
    console.log("Server corriendo en el port " + port);
})

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

app.get('/registro', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/ingreso', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})