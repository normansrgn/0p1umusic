

// ZOOM //

document.addEventListener("DOMContentLoaded", function () {
    const zoomable = document.getElementById("zoomable");
    const img = zoomable.querySelector("img");

    zoomable.addEventListener("mouseover", function () {
        img.style.transform = "scale(1.1)";
    });

    zoomable.addEventListener("mouseout", function () {
        img.style.transform = "scale(1)";
    });
});
