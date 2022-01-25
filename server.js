const express=require('express');
require('dotenv').config({path:'./config.env'});
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const path=require('path');
const Code=require('./models/Code');

require('./db/conn');

const app=express();
const port=process.env.PORT || 9000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:"50mb",extended:false}));

app.use('/api',require('./routes/code'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,  "client/build", "index.html"));
      });
}

const server=app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})

const io=require('socket.io')(server);

io.on("connection",(socket)=>{
    console.log("Connected to socket!");
    socket.on('joined',async({roomDbId,socketRoomId})=>{
        console.log(roomDbId,' ',socketRoomId);
        const code=await Code.findOne({_id:roomDbId});
        if(code.socketId==undefined){
            console.log("If");
            await Code.findOneAndUpdate({_id:roomDbId},{
                $set:{
                    socketId:socketRoomId
                }
            });
        }
        else {
            console.log("Else",' ',code.socketId);
            socket.join(code.socketId);
        }
    })
    // const code=await Code.findOne({})
    // .emit("re");
    socket.on("enteringCode",({code})=>{
        console.log(code);
        io.sockets.in("ntSiwqglTiuHOGk-AAAB").emit("receivingCode",{recCode:code});
    })
})