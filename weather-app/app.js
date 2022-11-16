const request = require("request");
const geocodeURL = require("./utils/gecode");
const forecast = require("./utils/forecast");

// const url ="http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query="

// request({url:url , json: true},(error, response) =>{
//     if(error){
//         console.log("Unable to connect to weather services!")
//     }
//     else if(response.body.error){
//         console.log("Unable to find location")
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out. It feels like " + response.body.current.feelslike + " degrees out." )
//     }
// })

// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

geocodeURL("Boston", (error, data) => {
  console.log("Error", error);
  console.log("response", data);
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})