 const express = require('express')
 const app = express()
 const indexRouter = require('./routes')
 const path = require('path')

 app.set('port',process.env.PORT || 8888)



 app.use(express.static(path.join(__dirname,'react-fairy/build')))
 
 app.use('/',indexRouter)
 app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버연결 대기중..');
 })