var map = L.map( 'map', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2
});


L.tileLayer( 'http://{s}.tile.openstreetmap.org/{1}/{1}/{1}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo( map );

for ( var i=0; i < markers.length; ++i )
{
   L.marker( [markers[i].lat, markers[i].lng] )
      .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
      .addTo( map );
}
