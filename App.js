console.log("App.js is connected");

// js for navigation
let openNavigationHandler = () => {

    let navi = document.getElementById("navi");

    if (navi.classList.contains("d-none-third"))
    {
        navi.classList.remove("d-none-third");
    }
    else {
        navi.classList.add("d-none-third");
    }
}

// js for form


let selectLocation = () => {

    let userlocation = document.getElementById("location").value;
    let locationInput = document.getElementsByClassName("hero-input")[0];
    locationInput.value = userlocation;
}
let selectPeople = () => {
    let optionValue = document.getElementById("no-people").value;
    let peopleInput = document.getElementsByClassName("hero-input")[2];
    peopleInput.value = optionValue;
}