// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("samples.json").then((incomingData) => {
    console.log(incomingData);
    var data = incomingData;
}

// // Display the default plot
// function init() {  
//   }