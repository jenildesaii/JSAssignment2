document.addEventListener('DOMContentLoaded', function () {

    // Get references to the DOM elements
    let thumbnailsContainer = document.getElementById('thumbnails');
    let featured = document.getElementById('featured');
    let caption = document.querySelector('figcaption');



    // Array of images with their details
    let images = [
        { src: 'images/flowers-yellow-large.jpg', caption: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany', thumb: 'images/flowers-yellow-small.jpg', alt: 'Sunflowers' },
        { src: 'images/flowers-purple-large.jpg', caption: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany', thumb: 'images/flowers-purple-small.jpg', alt: 'Purple Flowers' },
        { src: 'images/flowers-white-large.jpg', caption: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany', thumb: 'images/flowers-white-small.jpg', alt: 'White Flowers' },
        { src: 'images/flowers-red-large.jpg', caption: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany', thumb: 'images/flowers-red-small.jpg', alt: 'Red Flowers' },
        { src: 'images/flowers-pink-large.jpg', caption: 'Market in Münster, North Rhine-Westphalia, Germany', thumb: 'images/flowers-pink-small.jpg', alt: 'Pink Flowers' }
    ];



    // Build the thumbnail list dynamically
    images.forEach((image, index) => {
        let listItem = document.createElement('li');
        let thumbnail = document.createElement('img');
        thumbnail.src = image.thumb;
        thumbnail.alt = image.alt;
        thumbnail.width = 240;
        thumbnail.height = 160;



        // Event listener for thumbnail click
        thumbnail.addEventListener('click', function () {
            featured.src = image.src; // Update featured image
            caption.textContent = image.caption; // Update caption
            updateActiveThumbnail(thumbnail); // Update active thumbnail
        });

        listItem.appendChild(thumbnail);
        thumbnailsContainer.appendChild(listItem);
    });



    // Function to update the active thumbnail
    function updateActiveThumbnail(activeThumbnail) {
        let thumbnails = document.querySelectorAll('#thumbnails img');
        thumbnails.forEach(thumbnail => {
            thumbnail.classList.add('grayscale'); // Apply grayscale to all thumbnails
        });
        activeThumbnail.classList.remove('grayscale'); // Remove grayscale from active thumbnail
    }

    // Initialize the gallery with the first thumbnail active
    updateActiveThumbnail(document.querySelector('#thumbnails img'));
});
