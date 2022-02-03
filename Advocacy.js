function lightTheme() {
    document.getElementById("body").style.backgroundColor = "#e1e1e1"
    document.getElementById("home").style.backgroundColor = "#e1e1e1"
    document.getElementById("about").style.backgroundColor = "#e1e1e1"
    document.getElementById("blog").style.backgroundColor = "#e1e1e1"
    document.getElementById("contact").style.backgroundColor = "#e1e1e1"
    document.getElementById("sidebar").style.backgroundColor = "#e1e1e1"
}

function darkTheme() {
    document.getElementById("body").style.backgroundColor = "#1e1e1e";
    document.getElementById("home").style.backgroundColor = "#1e1e1e";
    document.getElementById("about").style.backgroundColor = "#1e1e1e";
    document.getElementById("blog").style.backgroundColor = "#1e1e1e";
    document.getElementById("contact").style.backgroundColor = "#1e1e1e";
    document.getElementById("sidebar").style.backgroundColor = "#1e1e1e";
}

var storedTheme = localStorage.getItem("storedTheme");

function save() {
    var theme = document.getElementById("body").style.backgroundColor;
    localStorage.setItem("storedTheme", theme);
    document.getElementById("body").style.backgroundColor = theme;
    document.getElementById("home").style.backgroundColor = theme;
    document.getElementById("about").style.backgroundColor = theme;
    document.getElementById("blog").style.backgroundColor = theme;
    document.getElementById("contact").style.backgroundColor = theme;
}

function get() {
    localStorage.getItem("storedTheme");
    document.getElementById("body").style.backgroundColor = storedTheme;
    document.getElementById("home").style.backgroundColor = storedTheme;
    document.getElementById("about").style.backgroundColor = storedTheme;
    document.getElementById("blog").style.backgroundColor = storedTheme;
    document.getElementById("contact").style.backgroundColor = storedTheme;
}

window.onload = get();

document.addEventListener("keydown", function (event) {
    if(event.ctrlKey && event.key == 'l') {
        event.preventDefault();
        lightTheme();
        save();
    }

    if(event.ctrlKey && event.key == 'd') {
        event.preventDefault();
        darkTheme();
        save();
    }
});

function home() {
    document.location = "Advocacy.html";
}

function blog() {
    document.location = "Blog.html";
}

function about() {
    document.location = "About.html";
}

function contact() {
    alert("Contact");
}