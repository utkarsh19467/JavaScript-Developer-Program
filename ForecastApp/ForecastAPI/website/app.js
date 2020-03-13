/* Global Variables */
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let baseurl='http://api.openweathermap.org/data/2.5/weather?zip=';
let apikey='&appid=5beb43e13dc3fa8be428191e6e50a00c';
const newholder=document.getElementById('entryHolder').nodeValue;

document.getElementById('generate').addEventListener('click',performAction);

function performAction(el){
    const content=document.getElementById('feelings').value;
    const zip=document.getElementById('zip').value;
    console.log(zip);
    getWeatherDemo(baseurl,zip,apikey)
    .then(function(data){
        console.log(data);
        postData('/addWeather',{temperature:data.main.temp,
           date:newDate,
           userContent:content,})
        
    }).then(function (){
        updateUI();
    })
}


const getWeatherDemo=async (baseURL,holder,key)=>{
    const res=await fetch(baseURL+holder+key);
    try{
        const data=await res.json();
        console.log(data);
        return data;
    }catch(error){
        console.log('error',error);
    }
}

const updateUI=async()=>{
    const request=await fetch('all');
    try{
        const allData=await request.json();
        console.log(allData);
        document.getElementById('temp').innerHTML=allData.temperature;
        document.getElementById('date').innerHTML=allData.date;
        document.getElementById('content').innerHTML=allData.userContent;
    }catch(error){
        console.log('error',error);
    }
}

const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),     
  });
    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};