const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {
//     console.log(e)
// })


// input.addEventListener('input', function(e){
//     console.log('INPUT VALUE')
//     console.log(e)
// })

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})
