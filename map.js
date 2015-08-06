(function() {
  "use strict";

  const createMap = function() {
    const mapOptions = {
      center: new google.maps.LatLng(52.51831005956184, 13.403148651123047),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 11
    };

    return new google.maps.Map(
      document.getElementById('map-canvas'),
      mapOptions
    );
  };

  let markers = [];
  const map = createMap();
  const createMarker = function(position, index) {
    return new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      ),
      title: `Created on ${position.timestamp}`,
      label: String(index + 1)
    });
  };

  const removeMarker = function(marker) {
    marker.setMap(null);
  };

  const positionsJSON = document.getElementById('positions-json');

  document.getElementById('form').addEventListener('submit', function(event) {
    try {
      var positions = JSON.parse(positionsJSON.value);
    } catch (e) {
      alert("Sorry, couldn't parse that JSON");
      console.error(e);
    }

    markers.forEach(removeMarker);
    markers = positions.map(createMarker);
    const bounds = markers.reduce(function(bounds, marker) {
      return bounds.extend(marker.getPosition());
    }, new google.maps.LatLngBounds());

    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());

    event.preventDefault();
  });
}());
