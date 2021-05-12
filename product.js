$(document).ready(function(){
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(products){
        var imgUrl = sessionStorage.getItem("url");

        function rendercard(response){

            var cardCon1 = $("#preview1");
            var cardCon2 = $("#preview2");

            var preview1 = $("<img>").attr({
                src: response.preview
            });
            preview1.attr("class","img-display");
            var title1 = $("<p>").html(response.name).attr({
                class: "product-name"
            });
            var brand1 = $("<p>").html(response.brand).attr({
                class: "product-brand"
            });
            var price1 = $("<p>").html("PRICE: Rs. " + response.price).attr({
                class: "product-price"
            });
            var p1 = $("<p>").html("DESCRIPTION:").attr({
                class : "head-title"
            });
            var p2 = $("<p>").html("PRODUCT PREVIEW:").attr({
                class : "head-title"
            });
            var desc1 = $("<p>").html(response.description).attr({
                class: "product-desc"
            });
            var imgCon = $('<div>').attr({
                class: "img-contain"
            });

            function picture(photo){
                var image1 = $("<img>").attr({
                    src: response.photos[j],class: "img-flex"
                });
                image1.click(function(){
                    $(".img-display").attr({
                        src: image1.attr("src")
                    })
                    $(".img-flex").removeClass("active1");
                    image1.addClass("active1");
                })
                $(imgCon).append(image1);
            }

            for( var j = 0; j<response.photos.length; j++) {
                picture(response.photos[j]);
            }
            var btn1 = $('<button>').html("ADD TO CART").attr({
                class: "btn-cart"
            });

            btn1.click(function(){
               var data = $(response);
               if(localStorage.key(0)==null){
                localStorage.setItem(response.id,JSON.stringify(response));
                console.log(localStorage.key.length);
               }
               else{
                   var count = 0;
                   for(var k=0; k<localStorage.key.length; k++) {
                       if(response.id == localStorage.key(k)){
                           count++;
                       }
                       else{
                            continue;
                       }
                    }
                    if(count==0){
                        localStorage.setItem(response.id,JSON.stringify(response)); 
                    }
                    console.log(localStorage.key.length);
                }
            })

            $(cardCon1).append(preview1,btn1);
            $(cardCon2).append(title1,brand1,price1,p1,desc1,p2,imgCon,);

        }
        for(var i = 0 ; i<products.length ; i++){
            if(imgUrl == products[i].preview){
                rendercard(products[i]);
            }else{
                continue;
            }
        }
    })



})