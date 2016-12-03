
var express = require('express')

var app = express()

app.use(express.static('wzj'))

app.listen(3000,()=>{
	
	console.log('服务器开启!')
})
