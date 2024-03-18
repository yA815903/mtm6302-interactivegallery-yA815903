document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { src: 'path/to/image1.jpg', caption: 'Image 1 description' },
        // Add more images as needed
    ];

    const gallery = document.querySelector('.gallery');
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = 'Gallery Image';
        img.classList.add('gallery-img');
        img.dataset.caption = image.caption;
        img.addEventListener('click', function() {
            showImage(this.src, this.dataset.caption);
        });
        gallery.appendChild(img);
    });

    function showImage(src, caption) {
        const popupImage = document.getElementById('popupImage');
        const imagePopup = document.getElementById('imagePopup');
        const imageCaption = document.getElementById('imageCaption');

        popupImage.src = src;
        imageCaption.textContent = caption;
        imagePopup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeImage() {
        const imagePopup = document.getElementById('imagePopup');
        imagePopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
