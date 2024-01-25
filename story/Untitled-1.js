async function initMap() {
    
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
      "marker",
    );
    const map = new Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: 40.7439208, lng: -73.9971402 },
      mapId: "4504f8b37365c3d0",
    });
    
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
      {
        position: { lat: 40.7443371, lng: -73.9920054 },
        title: "2 Bros Pizza",
      },
      {
        position: { lat: 40.722233, lng: -73.987429 },
        title: "Katz's Delicatessen",
      },
    ];
   const myroadpath = [
        {lat: 40.756649, lng: -73.9888153},
        {lat: 40.7579747, lng: -73.9855426},
        {lat: 40.7484405, lng: -73.9856644},
        {lat: 40.7443371, lng: -73.9920054},
        {lat: 40.722233, lng: -73.987429},
    ];

    const myroadtrip = new google.maps.Polyline({
        path: myroadpath,
        strokeColour: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

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
