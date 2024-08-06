const x = document.getElementById('mySidebar');

function nav() {
    if (x.style.width == "250px") {
        x.style.width = "0";
    } else {
        x.style.width = "250px";
    }
}