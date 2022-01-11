const express = require('express')

const port = 3000;

const app = express();

app.use(express.static('public'));

app.listen(port, () => {

    console.log(`connecting to //localhost:${port}`)

})


app.get("/flipcoin", (request, response) => {
    const array = ["Heads","Tails"]
    let randomNum = Math.floor(Math.random() * 2)
    console.log(array[randomNum])
    response.send(array[randomNum]);
  });