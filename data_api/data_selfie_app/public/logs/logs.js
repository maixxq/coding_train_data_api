getdata();
async function getdata() {
    const response = await fetch('/api');
    const data = await response.json();

    for (item of data) {
        const root = document.createElement('p');
        const drink = document.createElement('div');
        const geo = document.createElement('div');
        const date = document.createElement('div');
        const photo = document.createElement('img');

        drink.textContent = `My preferred cuppa is ${item.drink}`;
        geo.textContent = `Sipping at latitude ${item.lat}°, longitude ${item.lon}°, on`;
        const dateString = new Date(item.timestamp).toLocaleDateString();
        date.textContent = dateString;
        photo.src = item.image64;
        photo.alt = 'Creating logs for drinks'
        root.append(drink, geo, date, photo);
        document.body.append(root);

    }
    console.log(data);
}