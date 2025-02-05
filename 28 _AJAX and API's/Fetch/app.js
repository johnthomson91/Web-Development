// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
// //     })


// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//         const data = await res.json();
//         console.log(data.ticker.price)
//     } catch (e) {
//         console.log("SOMETHING WENT WRONG!!!", e)
//     }
// }

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("Response received, waiting to parse...", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log("Data has been parsed...");
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log("Error while parsing...", e)
//     })

const fetchBitcoinPrice2 = async () => {
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    const data = await res.json();
    console.log(data.ticker.price);
}

const fetchBitcoinPrice3 = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticket/btc-usd/ELON.MUSK'); // included wrong url on purpose to test CATCH
        const data = await res.json();
        console.log(data.ticker.price);
    }
    catch (e) {
        console.log("something went wrong", e)

    }

}