const express = require("express")
const mysql = require("mysql")
const port = 3002
const dgram = require('dgram');
const { appendFile } = require("fs")
const socket = dgram.createSocket('udp4');
const app = express()
const cors = require ("cors")
let message = ""

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
  res.send('Proyecto final')
})

app.listen(port, () => {
  console.log(`Aplicación ejemplo, escuchando ${port}`);
});

app.use("/users/", require("../routes/usersRoute"))



app.post("/register", (req,res) => {
  const username = req.body.username
  const password = req.body.password


  db.query("INSERT INTO users (username, password) VALUES (?,?)", 
  [username, password],
  (err, result)  => {
    console.log(err)
  }
  )
})

app.post("/login",(req, res)  => {
  const username = req.body.username
  const password = req.body.password


  db.query("SELECT * FROM users WHERE username = ? AND password = ?", 
  [username, password],
  (err, result)  => {
    if (err) {
      console.log(err)
    }

    if(result.length > 0){
      res.send(result)
    }else{
      res.send({message: "El usuario y contraseña no existe"})
    }
  }
  )
})

const db = mysql.createConnection({
  user:"root",
  host:"localhost",
  password:"root1234.",
  database:"LoginSystem",
})

app.post

socket.on('listening', () => {
  let addr = socket.address();
  console.log(`Listening for UDP packets at ${addr.address}:${addr.port}`);
});

socket.on('error', (err) => {
  console.error(`UDP error: ${err.stack}`);
});

socket.on('message', (msg, rinfo) => {
  const address = socket.address()
  console.log(`Recieved UDP message ${msg} from ${address.address}`);
  message = msg
  console.log(`El mensaje es: ${message}`)
});

app.get('/data', (req,res) => {
  const data = message.length > 0 ?  JSON.parse(message): ""
  /* const datos = {...data} */
  res.json({
    data
  })
})

app.set('port', 8080); // listen for TCP with Express
socket.bind(8082);     // listen for UDP with dgram