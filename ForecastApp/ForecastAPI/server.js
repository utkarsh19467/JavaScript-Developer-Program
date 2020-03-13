// Setup empty JS object to act as endpoint for all routes
projectData = {};
const express=require('express');
const app=express();
const bodyParser =  require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors=require('cors');
app.use(cors());
app.use(express.static('website'));
const port =3000;
const server=app.listen(port,listening);
function listening(){
    console.log(`running on localhost:${port}`);
}
app.get('/all',sendData);
function sendData(req,res){
    res.send(projectData);
}
app.post('/add',callBack);
function callBack(req,res){
    res.send('POST received');
}
const data=[];
app.post('/addweather',addWeather);
function addWeather(req,res){
    console.log(req.body);
    newDataEntry={temperature:req.body.temperature,
        date:req.body.date,
        userContent:req.body.userContent,};
    Object.assign(projectData,newDataEntry);
    console.log(projectData);

    res.send(newDataEntry);
}
