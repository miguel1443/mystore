const express = require('express')
const app = express()
const port = 3000
//crear end point en el metodo GET

app.get('/', function(req, res){
    res.send('hello word');
})


// se inicializa puerto
app.listen(3000, () => {
    console.log(`levantando server en el puerto ${port}`)
});
