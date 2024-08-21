document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    const camps = [
        { name: 'Camp A', lat: 40.7128, lng: -74.0060 },
        { name: 'Camp B', lat: 40.73061, lng: -73.935242 },
        // Add more camps here
    ];

    const map = new google.maps.Map(mapElement, {
        zoom: 12,
        center: { lat: 40.7128, lng: -74.0060 } // Default center
    });

    camps.forEach(camp => {
        new google.maps.Marker({
            position: { lat: camp.lat, lng: camp.lng },
            map: map,
            title: camp.name
        });
    });
});
