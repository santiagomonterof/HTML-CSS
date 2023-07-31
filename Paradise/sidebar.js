
let flag = false;

document.querySelector(".nav__container__bar .nav__container__bar__button").addEventListener("click", function () {
    document.querySelector(".nav__container__bar").classList.toggle("active");
    document.querySelector(".nav").classList.toggle("active");
    flag = !flag;
});

window.onscroll = function () {
    let y = window.scrollY;
    const elements = document.getElementsByClassName('nav__container__bar__button');
    console.log(y);
    if (flag === true) {
        if (y > 22) {
            elements[0].style.display = 'none';
        } else {
            elements[0].style.display = 'block';
        }
    }
    if (screen.width < 768) {
        elements[0].style.display = 'block';
    }
};

