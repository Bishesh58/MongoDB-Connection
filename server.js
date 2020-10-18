//import
import express from 'express';
import mongoose from 'mongoose';

//app config
const app = express()
const port = process.env.port || 8080

//middlewares
app.use(express.json());

//db config
const mongoURL = "mongodb+srv://client:3RPMsBXmSFMrTPA@cluster0.awx9j.mongodb.net/client?retryWrites=true&w=majority";

mongoose.connect(mongoURL,{
    useCreateIndex: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

mongoose.connection.once('open', () =>{
    console.log("DB connected");
})

//api routes [end points]
app.get('/', (req, res) => res.status(200).send('hello world'))


//listen
app.listen(port, () => console.log(`listening on localhost: ${port}`))

// 3RPMsBXmSFMrTPA

