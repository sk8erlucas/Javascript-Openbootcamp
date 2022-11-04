let marker1, marker2, marker3, map;

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const lugar1 = { lat: -34.6, lng: 58.48 };
    const lugar2 = { lat: -32.00, lng: 37.0 };
    const lugar3 = { lat: -30.0, lng: 40.01 };

    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: lugar1,
    });

    marker1 = new google.maps.Marker({
        position: lugar1,
        map: map,
    });

    marker2 = new google.maps.Marker({
      position: lugar2,
      map: map,
    });

    marker3 = new google.maps.Marker({
      position: lugar3,
      map: map,
    });
  }

  window.initMap = initMap;

