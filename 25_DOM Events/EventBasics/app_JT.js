const btn2 = document.querySelector('#v2');


btn2.onclick = function () {
    console.log('YOU CLICKED !!!')
    console.log('I HOPE IT WORKED !!!')
}


function scream() {
    console.log('AHHH');
    console.log('STOP TOUCHING ME')
}

btn2.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('dblclick', function () {
    alert('DOUBLE CLICKED BTN 3!')
})

function twist() {
    console.log('TWIST')
}

function shout() {
    console.log('and SHOUT!')
}

const tasButton = document.querySelector('#tas');

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);