//WorldWind library
var wwd = new WorldWind.WorldWindow("canvasOne");

//wwd.addLayer(new WorldWind.BMNGOneImageLayer());
//wwd.addLayer(new WorldWind.BMNGLandsatLayer());
wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer());


//wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
wwd.navigator.lookAtLocation.latitude = 55;
wwd.navigator.lookAtLocation.longitude = -106;


//Star Field background layer
var starFieldLayer = new WorldWind.StarFieldLayer()
wwd.addLayer(starFieldLayer);
//wwd.redraw();
 
 
// Placemark object 
var addPlacemark = function(lat, lon, name){
    var placemarkLayer = new WorldWind.RenderableLayer();
wwd.addLayer(placemarkLayer);

var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

placemarkAttributes.imageOffset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.3,
    WorldWind.OFFSET_FRACTION, 0.0);

placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION, 0.5,
    WorldWind.OFFSET_FRACTION, 1.0);
    
placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/pushpins/plain-red.png";

var position = new WorldWind.Position(lat, lon, 100.0);
var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);

placemark.label = name;
    //"Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n" +
    //"Lon " + placemark.position.longitude.toPrecision(5).toString();
placemark.alwaysOnTop = true;
placemarkLayer.addRenderable(placemark);

//console.log(placemark.screenBounds);
};
    
    
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// Set the width of the side navigation to 0 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Added placemarks
addPlacemark(-19, 82.309, "Indian Ocean");
addPlacemark(29, 31, "The Great Pyramid of Giza");
addPlacemark(34, -111, "Grand Canyon");
addPlacemark(40.4319, 116.5704, "Great Wall of China");
addPlacemark(10.524, -145, "Pacific Ocean");
addPlacemark(20.5994, -41, "Atlantic Ocean");
addPlacemark(17.7500, 142.5000, "Mariana Trench");
addPlacemark(38.807, -77.037, "NASA Main Office");
addPlacemark(-25.344, 131.037, "Uluru");
addPlacemark(23.416, 25.66, "Sahara Desert");
addPlacemark(71.706, -42.604, "Greenland");
addPlacemark(-82.862, -135, "Antarctica");
addPlacemark(28.598, 83.93, "The Himalayas");
addPlacemark(-3.465, -62.215, "Amazon Rainforest");
addPlacemark(31.559, 35.473,"Dead Sea");
addPlacemark(9.08, -79.68, "Panama Canal");

//ClickRecognizer
var handleClick = function (recognizer) {
            // Obtain the event location.
        var x = recognizer.clientX,
            y = recognizer.clientY;

        // Perform the pick. Must first convert from window coordinates to canvas coordinates, which are
        // relative to the upper left corner of the canvas rather than the upper left corner of the page.
        var pickList = wwd.pick(wwd.canvasCoordinates(x, y));
        
        var position1 = pickList.objects[0].position;
        
        //Himalayas
         if(position1.latitude >=28.598 && position1.latitude <= 38.598){//28.5983° N, 83.9311° E
            if(position1.longitude >=  83.93 && position1.longitude <= 93.93){
                    var e = document.getElementById("placemarkContent");
                    var c = document.getElementById("placemarkContent1");
                    var a = document.getElementById("placemarkContent2");
                    var h = document.getElementById("placemarkContent3");
                    var d = document.getElementById('placemarkImage');
                    d.src="https://cdn.britannica.com/74/114874-050-6E04C88C/North-Face-Mount-Everest-Tibet-Autonomous-Region.jpg";
                    e.innerHTML ="The Himalayas";
                    c.innerHTML = "The Himalayas is a mountain range in Asia, separating the plains of the Indian subcontinent from the Tibetan Plateau. The range has many of Earth's highest peaks, including the highest, Mount Everest.";
                    a.innerHTML = "Length: 2,400 km (1,500 mi)";
                    h.innerHTML = "Did you know: It cuts through the Zanskar range, and makes a deep well part at the base of the Kinner Kailash.";
                console.log(position1.latitude);
                console.log(position1.longitude);
                     openNav();                     
            }
        }
        
        //Amazon Rainforest
         if(position1.latitude >=-13.465 && position1.latitude <= -3.465){//3.4653° S, 62.2159° W
            if(position1.longitude >= -72.215 && position1.longitude <= -62.215){
                    var e = document.getElementById("placemarkContent");
                    var c = document.getElementById("placemarkContent1");
                    var a = document.getElementById("placemarkContent2");
                    var h = document.getElementById("placemarkContent3");
                    var d = document.getElementById('placemarkImage');
                    d.src="https://amp.thenational.ae/image/policy:1.838516:1552914649/ut21-MAR-brazil06.jpg?f=16x9&w=1200&$p$f$w=f5eb81b";
                    e.innerHTML ="Amazon Rainforest";
                    c.innerHTML = "The Amazon rainforest, covering much of northwestern Brazil and extending into Colombia, Peru and other South American countries, is the world’s largest tropical rainforest. It’s crisscrossed by thousands of rivers, including the powerful Amazon.";
                    a.innerHTML = "Area: 5.5 million km²";
                    h.innerHTML = "Did you know: The Amazon influences rainfall patterns as far away as the United States.";
                console.log(position1.latitude);
                console.log(position1.longitude);
                     openNav();                     
            }
        }
        
        
        // The Great Pyramid of Giza
        if(position1.latitude >=19 && position1.latitude <= 41){//29 31
            if(position1.longitude >=  26 && position1.longitude <= 36){
                    var e = document.getElementById("placemarkContent");
                    var c = document.getElementById("placemarkContent1");
                    var a = document.getElementById("placemarkContent2");
                    var h = document.getElementById("placemarkContent3");
                    var d = document.getElementById('placemarkImage');
                    d.src="https://sacredsites.com/images/africa/egypt/great_pyramid_with_camel_1200.jpg";
                    e.innerHTML ="The Great Pyramid of Giza";
                    c.innerHTML = "Built In: 2560 BC";
                    a.innerHTML = "Height: 146 meters(481 feet)";
                    h.innerHTML = "Length: 230.34 meters (756 feet)\n The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact. It was the tallest building for around 4000 years.";
                console.log(position1.latitude);
                console.log(position1.longitude);
                     openNav();                     
            }
        }
        
        //dead sea
        if(position1.latitude >=31.559 && position1.latitude <= 41.559){//31.559, 35.473
            if(position1.longitude >= 35.473  && position1.longitude <= 45.473 ){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="https://www.deadsea.com/wp-content/uploads/2018/08/general-info_2.jpg";
                e.innerHTML ="Dead Sea";
                c.innerHTML = "The Dead Sea is a salt lake bordered by Jordan to the east and Israel and the West Bank to the west. It lies in the Jordan Rift Valley, and its main tributary is the Jordan River. Its surface and shores are 430.5 metres below sea level, Earth's lowest elevation on land.";
                a.innerHTML = "Area: 605 km²";
                h.innerHTML = "Did you know: Egyptian mummification processes used asphalt imported from the Dead Sea region.";
            console.log(position1.latitude);
            console.log(position1.longitude);
                 openNav();                     
            }
        }
        //Panama Canal
         if(position1.latitude >=9.08 && position1.latitude <= 19.08){//9.08, -79.68
            if(position1.longitude >= -89.68  && position1.longitude <= -79.08 ){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="https://cdn.britannica.com/73/75873-050-C3A32171/tugboat-one-ship-locks-Panama-Canal.jpg";
                e.innerHTML ="Panama Canal";
                c.innerHTML = "The Panama Canal is an artificial 82 km waterway in Panama that connects the Atlantic Ocean with the Pacific Ocean. The canal cuts across the Isthmus of Panama and is a conduit for maritime trade.";
                a.innerHTML = "Length: 80 km";
                h.innerHTML = "Did you know: The United States started construction on the Panama Canal in 1904 and completed it in 1914.";
            console.log(position1.latitude);
            console.log(position1.longitude);
                 openNav();                     
            }
        }
        
        // Sahara Desert 
        if(position1.latitude >=23.416 && position1.latitude <= 27.416){
            if(position1.longitude >= 25.66  && position1.longitude <= 30.66 ){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="https://img.jakpost.net/c/2019/01/03/2019_01_03_62136_1546489440._large.jpg";
                e.innerHTML ="Sahara Desert";
                c.innerHTML = "Area: 9.2 million km²";
                a.innerHTML = "Length: 4,800 km (3,000 mi)";
                h.innerHTML = "Did you know: Major cities in the Sahara Desert are Nouakchott, Tamanrasset, Ghardaia, El Oued, Ghat etc.";
            console.log(position1.latitude);
            console.log(position1.longitude);
                 openNav();                     
            }
        }
        
        // Atlantic Ocean
        if(position1.latitude >= 20.59 && position1.latitude <= 30.59){
            if(position1.longitude >= -41 && position1.longitude <= -31){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="https://www.kids-world-travel-guide.com/images/xbahamas_shutterstock_173439083.jpg.pagespeed.ic.2AO1L-qLmO.jpg";
                e.innerHTML ="Atlantic Ocean";
                c.innerHTML = "Area: 106.5 million km²";
                a.innerHTML = "Max. depth: Puerto Rico Trench; 8,376 m (27,480 ft)";
                h.innerHTML = "Did you know: It is named after the god Atlas from Greek mythology.";
            console.log(position1.latitude);
            console.log(position1.longitude);
                openNav();
            }                
        }
        
        //Mariana Trench
         if(position1.latitude >= 12.75 && position1.latitude <= 22.5){
            if(position1.longitude >=  137.5 && position1.longitude <= 147.5){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="https://safety4sea.com/wp-content/uploads/2019/04/mariana-trench-1-e1555327151365.jpg";
                e.innerHTML ="Mariana Trench";
                c.innerHTML = "(Deepest Point)";
                 a.innerHTML = "Max. depth: 10,984 meters(36,037 feet)";
            console.log(position1.latitude);
            console.log(position1.longitude);
                openNav();
            }       
        }
        
        // Indian Ocean
        if(position1.latitude <= -14 && position1.latitude >= -24){
            if(position1.longitude >=  77.309 && position1.longitude <= 87.309){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="https://44s2n02i19u61od84f3rzjqx-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/maldives-800x500_c.jpg";
                e.innerHTML ="Indian Ocean";
                c.innerHTML = "Surface:	68,556,000 km2";
                a.innerHTML = "Max. depth: 7,258 meters(23,812 feet)";
                h.innerHTML = "Avg. depth: 3,741 meters(12,274 feet)";
            console.log(position1.latitude);
            console.log(position1.longitude);
                openNav();
            }                    
        }
            
        // NASA Main Office
        if(position1.latitude >=38.807 && position1.latitude <=48.804){
            if(position1.longitude <= -77 && position1.longitude >= -87){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="https://cdn.mos.cms.futurecdn.net/PDt2uV6HpwMfNjmEZ7Hxzf-320-80.jpg";
                e.innerHTML ="NASA Main Office";
                c.innerHTML = "Founded: July 29, 1958, United States";
                a.innerHTML = "Employees: 17,219 ";
                h.innerHTML = "The National Aeronautics and Space Administration is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and aerospace research. ";
            console.log(position1.latitude);
            console.log(position1.longitude);
                openNav();
            }            
        }

        // Uluru
        if(position1.latitude >= -25.344 && position1.latitude <=-11.344){
            if(position1.longitude <= 141.037 && position1.longitude >= 131.037){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="http://justfunfacts.com/wp-content/uploads/2015/11/uluru.jpg";
                e.innerHTML ="Uluru";
                c.innerHTML = "Elevation: 863 meters";
                a.innerHTML = "Prominence: 348 meters (1,142 ft)";
                h.innerHTML = "Did you know: Amazingly, some 2.5km's of Uluru's mass is believed to be underground.";
            console.log(position1.latitude);
            console.log(position1.longitude);
                openNav();
            }                
        }            
            
        // Pacific Ocean
        if(position1.latitude >=5.524 && position1.latitude <= 15.524){//40.4319 116.5704
            if(position1.longitude <=  -140.797 && position1.longitude >= -150.5085){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="https://blog.assets.traveltrivia.com/2019/04/Pacific-Ocean-Large.jpg";
                e.innerHTML ="Pacific Ocean";
                c.innerHTML = "Surface:	165,250,000 km2";
                a.innerHTML = "Max. depth: 10,911 meters(35,797 feet)";
                h.innerHTML = "Avg. depth: 4,280 meters(14,040 feet)";
            console.log(position1.latitude);
            console.log(position1.longitude);
                openNav();
            }
        }
            
        // The Great Wall of China
        if(position1.latitude >=35.4319 && position1.latitude <= 45.4319){//40.4319 116.5704
            if(position1.longitude >=  111.5704 && position1.longitude <= 121.5704){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="https://img.grouponcdn.com/deal/eP4HGnMMtUgbUHMZEnYM/3U-960x582/v1/c700x420.jpg";
                e.innerHTML ="The Great Wall of China";
                c.innerHTML = "Built In: 7th century BC";
                a.innerHTML = "Height: 6-7 meters(20-23 feet)";
                h.innerHTML = "Lenght:  21,196 km (13,171 mi)";
            console.log(position1.latitude);
            console.log(position1.longitude);
                openNav();            
            }  
        }
        
        // The Grand Canyon
        if(position1.latitude >=29 && position1.latitude <= 39){
            if(position1.longitude <= -106 && position1.longitude >= -116){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="https://www.nps.gov/grca/planyourvisit/images/0531fyp.jpg";
                e.innerHTML ="The Grand Canyon";
                c.innerHTML = "State: Arizona ";
                a.innerHTML = "Lenght: 446 km(227 miles)";
                h.innerHTML = "Depth: 1857 meters(6093 feet)"
            console.log(position1.latitude);
            console.log(position1.longitude);
                openNav();            
            }
        }
        
        // Greenland
        if(position1.latitude >=71.706 && position1.latitude <= 81.706){ //71.7069° N, 42.604
            if(position1.longitude <= -42.604 && position1.longitude >= -52.604){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/1d/4a/5b/nuuk-greenland-capital-city.jpg";
                e.innerHTML ="Greenland";
                c.innerHTML = "Greenland is the world's largest island, located between the Arctic and Atlantic oceans, east of the Canadian Arctic Archipelago.";
                a.innerHTML = "Area: 2.166 million km²";
                h.innerHTML = "Points of interest: Ilulissat Icefjord";
            console.log(position1.latitude);
            console.log(position1.longitude);
                openNav();            
            }
        }
        
        // Antarctica
        if(position1.latitude >=-92.862 && position1.latitude <= -82.862){ //82.8628° S, 135.0000° E
            if(position1.longitude <= -135 && position1.longitude >= -145){
                e = document.getElementById("placemarkContent");
                c = document.getElementById("placemarkContent1");
                a = document.getElementById("placemarkContent2");
                h = document.getElementById("placemarkContent3");
                d = document.getElementById('placemarkImage');
                d.src="https://www.kids-world-travel-guide.com/images/antarctica_ice-2.jpg";
                e.innerHTML ="Antarctica";
                c.innerHTML = "Antarctica, the southernmost continent and site of the South Pole, is a virtually uninhabited, ice-covered landmass. The peninsula’s isolated terrain also shelters rich wildlife, including many penguins";
                a.innerHTML = "Did you know: Antarctica is the largest desert in the world by area (14,000,000 km²).";
                h.innerHTML = "Fun fact: It's the only continent without a time zone.";
            console.log(position1.latitude);
            console.log(position1.longitude);
                openNav();            
            }
        }
            
            
        // If only one thing is picked and it is the terrain, tell the WorldWindow to go to the picked location.
        // if (pickList.objects.length === 1 && pickList.objects[0].isTerrain) {
            wwd.goTo(new WorldWind.Location(position1.latitude, position1.longitude));
            console.log(position1);
            console.log(x, y);
            console.log(position1.latitude);
            console.log(position1.longitude);
            //addPlacemark(position.latitude, position.longitude);
            //addPlacemark(55, -106, 100);
            
            
}

var clickRecognizer = new WorldWind.ClickRecognizer(wwd, handleClick);