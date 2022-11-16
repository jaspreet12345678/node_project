setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

const name = ["Jaspreet", "Ajay", "Shubham"];
const shortname = name.filter((data) => {
  return data.length < 5;
});

console.log(shortname);

const geoData = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
     callback(data);
  }, 2000);
};

geoData("India", (data) => {
  console.log(data);
});

const add = (a, b , callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
