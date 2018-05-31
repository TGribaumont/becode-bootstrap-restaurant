$(document).ready(function() {
    
    /* Gallery */
    
    // Create array with all pics url's
        var urlPics = [];
    function getPicsUrls(){
        var pics = [];
        var itemText = "";
        $.getJSON( "js/gallery.json", function( data ) {
    //        var sharedItems = [];
            $.each( data.gallery, function( i, item ) {
                pics.push(item);
            });
    //        var itemKey = "";
    //        var itemValue = "";
//            var urlPics = [];
            for(var i = 0; i < pics.length ;i++){
                itemText += "<h3 class='url'>" + pics[i].url + "</h3>";
                urlPics.push(itemText);
//                console.log(urlPics);
            }
//            console.log(urlPics);

    //        $( "<div/>", {
    //            "id": "jsonData",
    //            html: sharedItems.join( "" )
    //        }).appendTo( "#mainContent" );
//        console.log(typeof urlPics);
        return urlPics;
        });
    }
//    getPicsUrls();
//    console.log(urlPics);
    

    /* Display gallery pagination */
    function galleryPagin() {
//        getPicsUrls();
//        var urlPics = [];
        console.log(getPicsUrls());
        urlPics = getPicsUrls();
        var length = urlPics.length;
        var galleryPages = Math.ceil(length/3);
        var htmlPagination = "";
//        console.log(urlPics);
        for(var i = 1; i <= galleryPages; i++){
            console.log(i);
            // add link to pagination  galleryPagination
            if(i === 1){
                htmlPagination += '<li class="page-item active"><a class="page-link" href="#" onclick="displayPics(' + i + ')">' + i + '</a></li>';
            }else {
                htmlPagination += '<li class="page-item"><a class="page-link" href="#">' + i + '</a></li>';
            }
        }
        console.log(htmlPagination);
        $( "#galleryPrevious" ).insertAfter( htmlPagination );
    }
//    galleryPagin();
    
    function instantiateGallery() {
        var pics = [];
        $.getJSON( "js/gallery.json", function( data ) {
            $.each( data, function( i, item ) {
                pics.push(item.url);
            });
//            var length = pics.length;
            var galleryPages = Math.ceil(pics.length/3);
            var htmlPagination = '<li id="galleryPrevious" class="page-item disabled"><a class="page-link" href="#" tabindex="-1">Previous</a></li>';
            for(var i = 1; i <= galleryPages; i++){
                // add link to pagination  galleryPagination
                if(i === 1){
                    htmlPagination += '<li class="page-item active"><a class="page-link" href="#" onclick="displayPics(' + i + ')">' + i + '</a></li>';
                }else {
                    htmlPagination += '<li class="page-item"><a class="page-link" href="#" onclick="displayPics(' + i + ')">' + i + '</a></li>';
                }
            }
            htmlPagination += '<li id="galleryNext" class="page-item"><a class="page-link" href="#">Next</a></li>';
            $( "#galleryUl" ).append( htmlPagination );
        });
    }
    instantiateGallery();
    
//    function displayPics(x) {
//        var pics = [];
//        var startingIndex = 3*(x-1);
//        $.getJSON( "js/gallery.json", function( data ) {
//            $.each( data, function( i, item ) {
//                if(i >= startingIndex && i <= startingIndex + 2){
//                    pics.push(item.url);
//                }
//            });
//            for(var i = 0; i < pics.length; i++){
//                var id = "pic" + parseInt(i+1);
//                console.log(id);
//                document.getElementById(id).src = pics[i];
//            }
//        });
//    }
//    displayPics(4);
    
    /* Scroll to anchors */
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var target = $(this).attr('href');
        //JQUERY SCROLL
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 1000);
        
    });
    
    /* Change image in the footer */
    
    function displayNextImage() {
        x = (x === images.length - 1) ? 0 : x + 1;
        document.getElementById("img").src = images[x];
    }

    function displayPreviousImage() {
        x = (x <= 0) ? images.length - 1 : x - 1;
        document.getElementById("img").src = images[x];
    }

    function startTimer() {
        setInterval(displayNextImage, 2000);
    }

    var images = [], x = -1;
    images[0] = "images/heart.ico";
    images[1] = "images/burger.png";
    images[2] = "images/music.png";
    images[3] = "images/banana.png";
    images[4] = "images/tea.png";
    images[5] = "images/pasta.png";
    images[6] = "images/apple.png";
    
    startTimer();
});

    function displayPics(x) {
        var pics = [];
        var startingIndex = 3*(x-1);
        $.getJSON( "js/gallery.json", function( data ) {
            $.each( data, function( i, item ) {
                if(i >= startingIndex && i <= startingIndex + 2){
                    pics.push(item.url);
                }
            });
            for(var i = 0; i < pics.length; i++){
                var id = "pic" + parseInt(i+1);
                document.getElementById(id).src = pics[i];
            }
            
        });
    }

    function initMap() {

        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
//        var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        var mapOptions = {
            zoom: 5,
            scrollwheel: false,
            center: new google.maps.LatLng(46.8223316, 14.4012855),
//            mapTypeControlOptions: {
//                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
//            }
        };
        var map = new google.maps.Map(document.getElementById('map'),mapOptions);
        var myLatLng = {lat: 50.8223316, lng: 4.4012855};
//        var image = 'images/food-1529365_1280.jpg';
        var image = 'images/logo.png';
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
        });

        //Associate the styled map with the MapTypeId and set it to display.
//        map.mapTypes.set('map_style', styledMap);
//        map.setMapTypeId('map_style');

    }
//    initMap();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('js/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
