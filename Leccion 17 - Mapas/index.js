let marker, map;

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };

    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });

    marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });

    // Obtain the geolocation
    geoPosicion()

    //marker.setPosition({ lat, lgn})
  }
  

  function geoPosicion() {
    if (navigator.geolocation)
    {
        const geoLoc = navigator.geolocation
        const options = {timeout: 600}

        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)

    } else {
        alert("Tu navegador no soporta geolocalizacon")
    }
  }

  function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }

    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)

    console.log(nuevaPos)
  }

  function onError(error){
    console.log(error)
  }

  window.initMap = initMap;

