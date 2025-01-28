const galleryGrid = document.querySelector('.gallery-grid');
const imageFolder = 'images/gallery/';
const imageExtensions = ['jpg', 'jpeg', 'png'];

// Function to load all images from the gallery folder
function loadGalleryImages() {
    // You can either use a server-side solution to get the file list
    // Or maintain an array of image names
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

    images.forEach(imageName => {
        const img = document.createElement('img');
        img.src = imageFolder + imageName;
        img.alt = 'Gallery Image';
        galleryGrid.appendChild(img);
    });
}

loadGalleryImages();