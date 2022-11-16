// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

const event = {
    name: 'Jaspreet',
    guestList: ['Shubham', 'Ajay', 'Tarun'],
    printGuestList() {
        console.log('Guest list for ' + this.name + ' Birthday')
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()