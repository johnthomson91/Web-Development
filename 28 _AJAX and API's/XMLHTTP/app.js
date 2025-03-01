// // NOT AT ALL IMPORTANT TO REMEMBER ANY OF THIS CODE!
// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("ALL DONE WITH REQUEST!!!")
//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }

// req.onerror = function () {
//     console.log("ERROR!!!")
//     console.log(this);
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
// req.send();

const req = new XMLHttpRequest();

req.onload = function () {
    console.log("All done with request");
    console.log(this);
    console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

req.onerror = function () {
    console.log("Error!");
    console.log(this);
}

req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
req.send();