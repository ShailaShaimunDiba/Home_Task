// document.DOMContentLoaded = () => { 
//     let menubar = document.querySelector('.menubar');

// }

document.addEventListener('DOMContentLoaded', function () {
    let menubar = document.querySelector('.menubar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > menubar.offsetHeight) {
            menubar.classList.add('activeSticky');
        } else {
            menubar.classList.remove('activeSticky');
        }
    });
});


let forwardButton = document.querySelector('.forward-button');
forwardButton.onclick = () => {
    history.forward();
}