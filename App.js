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

