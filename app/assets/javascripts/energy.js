var map, canvas;

$(function(){

$('button').click(get_data);

});

function get_data() {

  $.ajax({
    type: "POST",
    url: "/data"
  }).done(function( msg ) {
    display_graph(msg);
    display_map();

    for (var i = 0; i < msg.length; i++ ){
      add_marker(msg[i].lat, msg[i].long, "zipcode: " + msg[i].zip.toString() + ", KWH: " + msg[i].kwh.toString());
    }

  });

}

function display_graph(zips)
{

Morris.Bar({
  element: 'graph',
  data: zips,
  xkey: 'zip',
  ykeys: ['kwh'],
  labels: ['kWh']
});

}

// Map and marker functions

function display_map () {
  var mapOptions = {
    center: new google.maps.LatLng("40.73","-73.93"),
    zoom: 13,

    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  canvas = $('#map-canvas')[0];
  map = new google.maps.Map(canvas, mapOptions)
}


function add_marker(lat, long, title){
  var latlng = new google.maps.LatLng(lat, long);
  var marker = new google.maps.Marker({position: latlng, map: map, title:title, animation: google.maps.Animation.DROP});
}