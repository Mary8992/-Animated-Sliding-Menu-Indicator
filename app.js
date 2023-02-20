const marker = document.querySelector("#marker");
const item = document.querySelectorAll("ul li a");

function indicator(e) {
    marker.style.top = e.offsetTop + "px";
    marker.style.width = e.offsetWidth + "px";
}

function indicator2(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}

item.forEach((link) => {
    link.addEventListener("mousemove", (e) => {
        if (window.innerWidth >= 1000) {
            indicator(e.target);
        } else {
            indicator2(e.target);
        }
    });
});
