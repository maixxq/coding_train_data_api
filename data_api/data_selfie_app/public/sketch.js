function setup() {
    noCanvas();
    const video = createCapture(VIDEO);
    video.size(160, 120);

let lat, lon;
const button = document.getElementById('submit');
button.addEventListener('click', async event => {
    video.loadPixels();
    const image64 = video.canvas.toDataURL();
    const drink = document.getElementById('drink').value;
    const data = { lat, lon, drink, image64 };
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
});

if ('geolocation' in navigator) {
    console.log("geolocation available");
    navigator.geolocation.getCurrentPosition(async position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = lon;
    });
} else {
    console.log("geolocation not available");
}

}