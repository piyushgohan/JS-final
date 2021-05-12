$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })



    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(products){

            function rendercard1(products){

                var cardContainer = $('#cloth-1');
                    var card = $('<div>').attr({
                        class: "cards"
                    })
                    var image1 = $('<img>').attr({
                        class: "cards-img"
                    })
                    image1.attr("src",products[i].preview)
                    var p1 = $('<p>').text(products[i].name).attr({
                        class: "img-name"
                    });
                    var p2 = $('<p>').text(products[i].brand).attr({
                        class: "img-brand"
                    });
                    var p3 = $('<p>').text(products[i].price).attr({
                        class: "img-price"
                    });
                    $(card).append(image1,p1,p2,p3);

                    $(card).click(function(){
                        sessionStorage.setItem("url",image1.attr("src"));
                        window.location="./product.html";
                    })
                    $(cardContainer).append(card);
        }
    
            function rendercard2(products){
                var cardContainer = $('#access-1');
                    var card = $('<div>').attr({
                        class: "cards"
                    })
                    var image1 = $('<img>').attr({
                        class: "cards-img"
                    });
                    image1.attr("src",products[i].preview)
                    var p1 = $('<p>').text(products[i].name).attr({
                        class: "img-name"
                    });
                    var p2 = $('<p>').text(products[i].brand).attr({
                        class: "img-brand"
                    });
                    var p3 = $('<p>').html("Rs." + products[i].price + "/-").attr({
                        class: "img-price"
                    });
                    $(card).append(image1,p1,p2,p3);
                    $(card).click(function(){
                        sessionStorage.setItem("url",image1.attr("src"));
                        window.location="./product.html";
                    })
                    $(cardContainer).append(card);
                }
        for(var i = 0; i<products.length; i++){
            if(i<products.length/2){
                rendercard1(products);
            }
            else{
                rendercard2(products);
            }
        }
    })
});

