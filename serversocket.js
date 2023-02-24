const https = require('https'); // http
const socketIO = require('socket.io'); //socket
const app = require("express")(); //express
const fs = require('fs'); // fs
const db = require("./src/tables/db"); //db
const conf = require("./conf/cfg.json"); //conf
const utils = require("./utils/utils"); //utils
const socket = require("./src/socket/index") //socket handler

let tables = {};
let sql = {};
if(conf.db.open){
  // db init
  let dbData = db.excute(conf);
  tables = dbData.tables;
  sql = dbData.sql;
  app.use(async function (req,res,next) {
    req.ctx = {};
    req.ctx.tables = tables;
    req.ctx.sql = sql;
    req.ctx.Sql = Sql;
    await next();
  })
  console.log("【tl-rtc-file】db init...")
}


//log flow init --日志流水初始
app.use(async function (req,res,next) {  
  res.tl = {};
  res.tl.flowId = utils.genFlow();
  await next();
})
console.log("【tl-rtc-file】flow init...")


//Socket连接监听
let options = {
  key: fs.readFileSync('./conf/keys/server.key'),
  cert: fs.readFileSync('./conf/keys/server.crt')
}
let io = socketIO.listen(
  https.createServer(options).listen(conf.ws.ssl_port)
);
conf.ws.io = io;
socket.excute(tables, sql, conf);
console.log("【tl-rtc-file】socket init...")


console.log("【tl-rtc-file】socket listen on ",conf.ws.ssl_port," successful");