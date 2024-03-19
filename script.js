const gallery = document.querySelector(".gallery");

const images = [
    {
        id: "battle",
        src: "images/battle.jpg",
        hdSrc: "images/battle_hd.jpg",
        caption: "Image 1"
    },
    {
        id: "last-of-us",
        src: "images/last-of-us.jpg",
        hdSrc: "images/last-of-us_hd.jpg",
        caption: "Image 2"
    },
    {
        id:"viking-human",
        src: "images/viking-human.jpg",
        hdSrc: "images/viking-human_hd.jpg",
        caption: "Image 3"
    },
    {
        id: "viking",
        src: "images/viking.jpg",
        hdSrc: "images/viking_hd.jpg",
        caption: "Image 4"
    },
];

images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.src;
    img.dataset.hdSrc = image.hdSrc;
    img.dataset.caption = image.caption;
    img.alt = image.caption;
    img.addEventListener("click", showHDImage);
    gallery.appendChild(img);
});

function showHDImage(event) {
    const img = event.target;
    const hdImage = document.createElement("div");
    hdImage.className = "hd-image";
    hdImage.innerHTML = `<img src="${img.dataset.hdSrc}" alt="${img.dataset.caption}">`;
    hdImage.addEventListener("click",HDImage); // Attach the event listener to the hdImage div
    const caption = document.createElement("div");
    caption.className = "caption";
    caption.textContent = img.dataset.caption;
    gallery.appendChild(hdImage); // Append the hdImage div to the gallery
    gallery.appendChild(caption); // Append the caption div to the gallery
    hdImage.style.display = "block";
    caption.style.display ="block";
}

function hideHDImage(event) {
    const hdImage = event.target.closest(".hd-image"); // Get the closest ancestor with the class "hd-image"
    const caption = document.querySelector(".caption");
    hdImage.style.display = "none";
    caption.style.display = "none";
}