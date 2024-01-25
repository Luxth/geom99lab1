function initMap() {
    const map = new google.maps.Map
     ( document.getElementById("map"),
      {
        zoom: 13,
        center: { lat: 40.7439208, lng: -73.9971402 },
      },
    )
    
    const roadtrip = [
      { 
          position: lat: 40.756649, lng: -73.9888153 }, 
          title = "Hilton New York Times Square Hotel",
      { 
          position: lat: 40.7579747, lng: -73.9855426 },
          title = "Times Square",
      { 
          position: lat: 40.7484405, lng: -73.9856644 }, 
          title = "Empire State Building",
      { 
          position: lat: 40.7443371, lng: -73.9920054 },
          title = "2 Bros Pizza",
      { 
          position: lat: 40.722233, lng: -73.987429 },
          title = "Katz's Delicatessen",
      },    
    ];
    
    const newyorkpath = new google.maps.Polyline({
      path: roadtrip, 
      geodesic: true,
      strokeColor: "#FF0000", 
      strokeOpacity: 1.0, 
      strokeWeight: 2, 
    });
    
    newyorkpath.setMap(map);
    
    
    
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
  
    // Create the markers.
    roadtrip.forEach(([position, title], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
        optimized: false,
      });

  
      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }
initMap();
  
  
