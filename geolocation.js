const display = document.getElementById('display');
myLocation = document.getElementById('btn');
let id;

const latitud = 23.7787992;
const longitud = 90.4141561;

const showError = (err) => {
    console.log(err)
    switch(err.code){
        case err.PERMISSION_DENIED:
            display.innerHTML = "User denied the requiest for Geolocation.";
            break;
        case err.POSITION_UNAVAILABLE:
            display.innerHTML = "Location information is unavailable.";
            break;
        case err.TIMEOUT:
            display.innerHTML = 'The request to get user location timed out.'
            break;
        case err.UNKNOEN_ERROR:
            display.innerHTML = "An Unknwon error occurred.";
            break;
    }
}

const getLocation = () => {
    if(navigator.geolocation){
        // navigator.geolocation.getCurrentPosition(showPosition, showError);
        id = navigator.geolocation.watchPosition(showPosition, showError);
    }else {
        display.innerHTML = ('Geolocation is not available in your browser!');
    }
}

const showPosition = (position) => {
    display.innerHTML = `Latitude: ${position.coords.latitude}<br/> Longitude: ${position.coords.longitude}`
}

const showLocation = (position) => {
    window.open(`https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}`)
}

myLocation.addEventListener('click', () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation, showError);
    }else{
        alert('Your Browser dosent support Geolocation');
    }
})

const clearWatch = () => {
    navigator.geolocation.clearWatch(id);
}