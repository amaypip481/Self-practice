
// let home = document.querySelector('#home');
// home.addEventListener('click',(event) => {
//     console.log('Home menu item was clicked');
// });

// let dashboard = document.querySelector('#dashboard');
// dashboard.addEventListener('click',(event) => {
//     console.log('Dashboard menu item was clicked');
// });

// let report = document.querySelector('#report');
// report.addEventListener('click',(event) => {
//     console.log('Report menu item was clicked');
// });

let btn = document.querySelector('.btn');

 btn.addEventListener('click', function () {
        alert('Mouse Clicked');
 });

let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent);

