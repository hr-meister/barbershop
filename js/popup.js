var openSigIn = document.querySelector(".sign-in");
var openMap = document.querySelector(".contacts .open-map");
var popupSigIn = document.querySelector(".modal-content");
var popupMap = document.querySelector(".modal-content-map");
var overlaySigIn = document.querySelector(".modal-content + .modal-overlay");
var overlayMap = document.querySelector(".modal-content-map + .modal-overlay");
var closeSigIn = popupSigIn.querySelector(".modal-content-close");
var closeMap = popupMap.querySelector(".modal-content-close");

var formSigIn = popupSigIn.querySelector(".login-form");
var loginSigIn = formSigIn.querySelector("[name=login]");
var passwordSigIn = formSigIn.querySelector("[name=password]");
var storage = localStorage.getItem("userLogin");

openSigIn.addEventListener("click", function (event) {
    event.preventDefault();
    popupSigIn.classList.add("show");
    overlaySigIn.classList.add("show");
    if (storage) {
        loginSigIn.value = storage;
        passwordSigIn.focus();
    } else {
        loginSigIn.focus();
    }
});

closeSigIn.addEventListener("click", function (event) {
    event.preventDefault();
    popupSigIn.classList.remove("show");
    overlaySigIn.classList.remove("show");
});

formSigIn.addEventListener("submit", function (event) {
    if (!loginSigIn.value || !passwordSigIn.value) {
        event.preventDefault();
        console.log("Обязательные поля формы не заполнены!");
        
    } else {
        localStorage.setItem("userLogin", loginSigIn.value);
    }
});

openMap.addEventListener("click", function (event) {
    event.preventDefault();
    popupMap.classList.add("show");
    overlayMap.classList.add("show");
});

closeMap.addEventListener("click", function (event) {
    event.preventDefault();
    popupMap.classList.remove("show");
    overlayMap.classList.remove("show");
});

window.addEventListener("keydown", function (event) {
    if ((event.keyCode === 27) && (popupSigIn.classList.contains("show"))) {
        popupSigIn.classList.remove("show");
        overlaySigIn.classList.remove("show");
    } else if ((event.keyCode === 27) && (popupMap.classList.contains("show"))) {
        popupMap.classList.remove("show");
        overlayMap.classList.remove("show");
    }
});