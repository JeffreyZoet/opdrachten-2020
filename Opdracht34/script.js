const btn = document.querySelector('#mybutton');
const bdy = document.querySelector('body');

btn.addEventListener('click', function () {
    alert('button clicked')
});

/*
bdy.addEventListener ('click', function () {
    bdy.classList.add ('red-background');
}); */

bdy.addEventListener('click', function () {
    bdy.classList.toggle('red-background');
});

