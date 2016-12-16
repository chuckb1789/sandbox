var app= require('express')()

app.get('/', function(req, res){
    res.status(499)
    res.send('hello teapots!')
})

app.listen(2222)
