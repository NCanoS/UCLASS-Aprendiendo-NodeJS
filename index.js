console.log("Hello World");

const axios = require("axios");
axios.get("https://´pkeapi.co/api/v2/pokemon/ditto").then(data =>{
    console.log(data);
})