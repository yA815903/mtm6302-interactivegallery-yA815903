const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');
const modalCaption = document.querySelector('.modal p');

const images = [
    { src: 'images/battle.jpg', caption: 'Battle' },
    { src: 'images/last of us.jpg', caption: 'Last of Us' },
    { src: 'images/Viking human.jpg', caption: 'Viking Human' },
    { src: 'images/viking.jpg', caption: 'Viking' },
    // Add more images here
];

function createImageElement(src, caption) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = caption;
    img.loading = 'lazy';

    const figcaption = document.createElement('p');
    figcaption.textContent = caption;

    const figure = document.createElement('figure');
    figure.appendChild(img);
    figure.appendChild(figcaption);

    return figure;
}

function showModal(src, caption) {
    modalImg.src = src;
    modalCaption.textContent = caption;
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
}

function handleImageClick(event) {
    const img = event.target;
    const src = img.src;
    const caption = img.alt;
    showModal(src, caption);
}

function handleModalClick(event) {
    if (event.target === modal) {
        hideModal();
    }
}

function init() {
    images.forEach(({ src, caption }) => {
        const figure = createImageElement(src, caption);
        gallery.appendChild(figure);
        figure.addEventListener('click', handleImageClick);
    });

    modal.addEventListener('click', handleModalClick);
}

init();