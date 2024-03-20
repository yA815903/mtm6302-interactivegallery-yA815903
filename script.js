const gallery = document.querySelector('.gallery');

const images = [
    { id: 'image1', src: 'https://picsum.photos/id/1015/400/300', hdSrc: 'https://picsum.photos/id/1015/1200/900', caption: 'Image 1' },
    { id: 'image2', src: 'https://picsum.photos/id/1018/400/300', hdSrc: 'https://picsum.photos/id/1018/1200/900', caption: 'Image 2' },
    { id: 'image3', src: 'https://picsum.photos/id/1020/400/300', hdSrc: 'https://picsum.photos/id/1020/1200/900', caption: 'Image 3' },
    { id: 'image4', src: 'https://picsum.photos/id/1022/400/300', hdSrc: 'https://picsum.photos/id/1022/1200/900', caption: 'Image 4' },
    { id: 'image1', src: 'https://picsum.photos/id/1023/400/300', hdSrc: 'https://picsum.photos/id/1015/1200/900', caption: 'Image 1' },
    { id: 'image2', src: 'https://picsum.photos/id/1024/400/300', hdSrc: 'https://picsum.photos/id/1024/1200/900', caption: 'Image 2' },
    { id: 'image3', src: 'https://picsum.photos/id/1025/400/300', hdSrc: 'https://picsum.photos/id/1025/1200/900', caption: 'Image 3' },
    { id: 'image4', src: 'https://picsum.photos/id/1026/400/300', hdSrc: 'https://picsum.photos/id/1026/1200/900', caption: 'Image 4' },
];

function createImageElement(image) {
    const img = document.createElement('img');
    img.src = image.src;
    img.dataset.hdSrc = image.hdSrc;
    img.dataset.caption = image.caption;
    img.alt = image.caption;
    img.addEventListener('click', showHDImage);
    return img;
}

function showHDImage(event) {
    const img = event.target;
    const hdImage = document.createElement('div');
    hdImage.className = 'hd-image';
    hdImage.innerHTML = `<img src="${img.dataset.hdSrc}" alt="${img.dataset.caption}">`;
    hdImage.addEventListener('click', hideHDImage);
    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.textContent = img.dataset.caption;
    hdImage.appendChild(caption);
    gallery.appendChild(hdImage);
    hdImage.style.display = 'block';
    caption.style.display = 'block';
}

function hideHDImage(event) {
    const hdImage = event.target.closest('.hd-image');
    hdImage.style.display = 'none';
    const caption = hdImage.querySelector('.caption');
    caption.style.display = 'none';
}

function addImagesToGallery() {
    images.forEach(image => {
        const img = createImageElement(image);
        gallery.appendChild(img);
    });
}

addImagesToGallery();