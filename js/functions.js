$(document).ready(function() {
    
    /* Gallery */
    
    // Create array with all pics url's
    function getPicsUrls(){
        var urlPics = [];
        $.getJSON( "js/gallery.json", function( data ) {
            var pics = [];
    //        var sharedItems = [];
            $.each( data.gallery, function( i, item ) {
                pics.push(item);
            });
    //        var itemKey = "";
    //        var itemValue = "";
//            var urlPics = [];
            for(var i = 0; i < pics.length ;i++){
                itemText = "<h3 class='url'>" + pics[i].url + "</h3>";
                urlPics.push(itemText);
            }
            console.log(urlPics);

    //        $( "<div/>", {
    //            "id": "jsonData",
    //            html: sharedItems.join( "" )
    //        }).appendTo( "#mainContent" );
        });
        return urlPics;
    }
//    getPicsUrls();

    /* Display gallery pagination */
    function galleryPagin() {
        urlPics = getPicsUrls();
        var length = urlPics.length;
        var galleryPages = Math.ceil(length/3);
        var htmlPagination = "";
        for(var i = 1; i <= galleryPages; i++){
            // add link to pagination  galleryPagination
            if(i === 1){
                htmlPagination += '<li class="page-item active"><a class="page-link" href="#" onclick="displayPics(' + i + ')">' + i + '</a></li>';
            }else {
                htmlPagination += '<li class="page-item"><a class="page-link" href="#">' + i + '</a></li>';
            }
        }
        $( "#galleryPrevious" ).insertAfter( htmlPagination );
    }
    galleryPagin();
    
    function displayPics(x) {
        alert(x);
    }
    
    
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