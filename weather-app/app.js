// const { response } = require("express")
// const request  = require("request")

// const url ="http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596"

// request({url:url , json: true},(error, response) =>{
//     console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out. It feels like " + response.body.current.feelslike + " degrees out." )
// })

var QRCode = require('qrcode')
const express = require("express")
const app =express()

app.get("/", (req, res) => {
    QRCode.toDataURL('I am a pony!', function (err, url) {
    res.send(`<img src="${url}"/>`)
    })
})

app.listen(8000)