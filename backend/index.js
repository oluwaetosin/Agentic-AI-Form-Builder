const express =  require('express');
const cors = require('cors')

const app = express();

app.use(express.json())

app.use(cors())

const port = 3000;

const configs = [];




app.get("/", (req, res)=>{
        res.status(200).json(configs);
});

app.post("/", (req, res)=>{
    configs.push(req.body);
    res.send();
})

app.listen(port,()=>{
    console.log("Running");
})