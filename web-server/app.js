const { constants } = require("buffer");
const hbs = require("hbs")
const express = require("express");
const app = express();
const path = require("path")
const publicpathdirectory =path.join(__dirname,"./public")
const viewPath = path.join(__dirname,"./templates/views")
const partialPath = path.join(__dirname,"./templates/partials")

app.use(express.static(publicpathdirectory))
app.set('view engine',"hbs")
app.set('views',viewPath)
hbs.registerPartials(partialPath)

app.get('',(req,res) => {
    res.render('index',{
        // title: "Hello i am Jaspreet and this is index.page",
        title: "Weather",
        name:"Jaspreet"
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title:"About",
        name : "Jaspreet",
        src : "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
        name:"Jaspreet"
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        title:"Help",
        text : "This is some helpfull text",
        name:"Jaspreet"
    })
})
app.get('/weather',(req,res) => {
    res.render('weather',{
        title:"Weather",
        text : "This is some Weather Report",
        name:"Jaspreet"
    })
})

app.get('/help/*',(req,res) => {
    res.render('404',{
     title : "404",
     name: "Jaspreet",
     errorMessage: "Help article page not found"
    })
 })

app.get('*',(req,res) => {
   res.render('404',{
    title : "404",
    name: "Jaspreet",
    errorMessage: "Page Not Found"
   })
})
// app.get("/help", (req, res) => {
//   res.send([{
//     name : "Jaspreet"
//   },{
//     name: "Shubham"
//   },{
//     name: "Ajay"
//   }
// ]);
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About</h1>");
// });

// app.get("/weather", (req, res) => {
//   res.send({
//     forecast: "Its snowing",
//     location: "India",
//   });
// });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
