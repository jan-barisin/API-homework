async function loadArtworks() { 
    const urls = [
        'https://api.artic.edu/api/v1/artworks/129883',
        'https://api.artic.edu/api/v1/artworks/129884',
        'https://api.artic.edu/api/v1/artworks/129885'
    ];

    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));

        const images = data.map(item => {
            const imageId = item.data.image_id;
            return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
        });

        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const img3 = document.getElementById('img3');

        img1.src = images[0];
        img2.src = images[1];
        img3.src = images[2];
    } catch (error) {
        console.error('Error loading artwork data:', error);
    }
}

loadArtworks();
