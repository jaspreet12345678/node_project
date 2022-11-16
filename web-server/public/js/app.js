console.log("Client side javascript started")

// fetch("https://puzzle.mead.io/puzzle").then((response) =>{
//     response.json().then((data) =>{
//         console.log(data)
//     })
// })


// fetch("http://localhost:4000/weather").then((response) =>{
//     response.json().then((data) =>{
//        if(data.address){
//            console.log(data.address)
//         }else{
//            console.log(data.error)
//        }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // console.log("testing")
    const location = search.value
    // console.log(location)

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                console.log(data.console)
            }
        })
    })
})