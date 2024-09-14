var links = document.querySelectorAll("#navi a");
for (var i = 0; i < links.length; i++) {
links[i].addEventListener("click", function () {
document.getElementById("responsive-nav").checked = false;
    })
}