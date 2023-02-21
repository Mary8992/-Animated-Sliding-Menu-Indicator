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

function updateIndicator() {
    const currentLink = document.querySelector("ul li a:hover");
    if (window.innerWidth >= 1000) {
        if (currentLink) {
            indicator(currentLink);
        } else {
            marker.style.top = "";
            marker.style.width = "";
        }
    } else if (window.innerWidth <= 810) {
        if (currentLink) {
            indicator(currentLink);
        } else {
            marker.style.left = "";
            marker.style.width = "";
        }
    } else {
        if (currentLink) {
            indicator2(currentLink);
        } else {
            marker.style.left = "";
            marker.style.width = "";
        }
    }
}

item.forEach((link) => {
    link.addEventListener("mousemove", (e) => {
        if (window.innerWidth >= 1000) {
            indicator(e.target);
        } else if (window.innerWidth <= 810) {
            indicator(e.target);
        } else {
            indicator2(e.target);
        }
    });
});

/*
"function indicator(e) {
    marker.style.top = e.offsetTop + "px";
    marker.style.width = e.offsetWidth + "px";
}":

This function indicator() is used to set the position and width of the #marker element when a menu item is clicked or hovered on.

It takes a parameter e, which is the event target, in this case, the menu item that was clicked or hovered on.

The function sets the top property of the #marker element to the offsetTop property of the event target, which is the distance between the top of the event target and the top of its offset parent. This aligns the top edge of the #marker element with the top edge of the clicked/hovered menu item.

The function also sets the width property of the #marker element to the offsetWidth property of the event target, which is the width of the event target. This sets the width of the #marker element to match the width of the clicked/hovered menu item.
 */

/*
"function indicator2(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}":

The indicator2() function sets the position and width of the marker element based on the offsetLeft and offsetWidth properties of the target element e. The offsetLeft property returns the number of pixels that the target element's left edge is offset from its nearest positioned ancestor element, while the offsetWidth property returns the width of the target element including padding and border.

This function is likely used to update the position of the marker element when the menu items are clicked or when the window is resized.
 */

/*
"item.forEach((link) => {
    link.addEventListener("mousemove", (e) => {
        if (window.innerWidth >= 1000) {
            indicator(e.target);
        } else {
            indicator2(e.target);
        }
    });":

    This code adds a mousemove event listener to each link in the item NodeList using a forEach loop. When a link is hovered over and the mouse is moved, the indicator or indicator2 function is called depending on the width of the window.

If the width of the window is greater than or equal to 1000 pixels, then the indicator function is called with the target element of the event passed as an argument. This function positions and resizes the marker element to match the position and width of the target element.

If the width of the window is less than 1000 pixels, then the indicator2 function is called with the target element of the event passed as an argument. This function positions and resizes the marker element to match the position and width of the target element, but sets the left property instead of the top property.
 */
