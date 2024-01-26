// Template referenced for the map: https://developers.google.com/maps/documentation/javascript/examples/advanced-markers-accessibility
async function initMap() {
    
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
      "marker",
    );
    const map = new Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: 40.7439208, lng: -73.9971402 },
      mapId: "4504f8b37365c3d0",
    });
    // The centre in New York City and the zoom is at city level
    const roadtrip = [
      {
        position: { lat: 40.756649, lng: -73.9888153 },
        title: "Hilton New York Times Square Hotel",
      },
      {
        position: { lat: 40.7579747, lng: -73.9855426 },
        title: "Times Square",
      },
      {
        position: { lat: 40.7484405, lng: -73.9856644 },
        title: "Empire State Building",
      },
        // Want to visit the empire state building
      {
        position: { lat: 40.7443371, lng: -73.9920054 },
        title: "2 Bros Pizza",
      },
        // 2 Bros Pizza is known for the one dollar pizza
      {
        position: { lat: 40.722233, lng: -73.987429 },
        title: "Katz's Delicatessen",
      },
        // Best place for rye and pastrami in New York at the location called Katz Delicatessen
    ];
   // Template reference for the polylines: https://developers.google.com/maps/documentation/javascript/examples/polyline-simple
    const myroadpath = [
        {lat: 40.756649, lng: -73.9888153},
        {lat: 40.7579747, lng: -73.9855426},
        {lat: 40.7484405, lng: -73.9856644},
        {lat: 40.7443371, lng: -73.9920054},
        {lat: 40.722233, lng: -73.987429},
    ];
    // Each coordinates in the myroadpath are the points used in the roadtrip constant 
    const myroadtrip = new google.maps.Polyline({
        path: myroadpath,
        geodesic: true,
        strokeColor: "#4FB06D",
        strokeOpacity: 1.0,
        strokeWeight: 3,
    });
    // The polylines are transparent and have weight of 3 which is big. Also the polylines are green
    myroadtrip.setMap(map);
    
    const infoWindow = new InfoWindow();
  
   
    roadtrip.forEach(({ position, title }, i) => {
      const pin = new PinElement({
        glyph: `${i + 1}`,
      });
      const marker = new AdvancedMarkerElement({
        position,
        map,
        title: `${i + 1}. ${title}`,
        content: pin.element,
      });
        // This code is for adding title to the numbered pin
  
      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", ({ domEvent, latLng }) => {
        const { target } = domEvent;
  
        infoWindow.close();
        infoWindow.setContent(marker.title);
        infoWindow.open(marker.map, marker);
      });
    });
  }
  
  initMap();
