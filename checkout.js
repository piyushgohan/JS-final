$(document).ready(function(){
    var count = 0;
    function rendercard(item){
        var cardCon = $("#checkout-1");
        var card = $("<div>").attr({
           class: "check-card"
        });
        var img1=$("<img>").attr({
            class: "check-img"
        })
        img1.attr("src",item.preview);
        var title1=$("<p>").html(item.name + " x1").attr({
            class: "check-title"
        })
        var price1=$("<p>").html("Rs. " + item.price).attr({
            class: "check-price"
        })
        var div1 =$("<div>").attr({
            class : "check-tags"
        })
        count+=item.price;
        $(div1).append(title1,price1);
        $(card).append(img1,div1);
        $(cardCon).append(card);
    }
    for( var i=0; i<localStorage.length; i++){
        rendercard(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    var con2 = $("#checkout-2");
    var title2 =$("<p>").html("total amount :-").attr({
        id: "cc-head"
    })
    var amount = $("<p>").html("AMOUNT: Rs. " + count + "/-").attr({
        class: "check-amount"
    })
    var btn = $("<button>").html("place order").attr({
        class: "check-btn"
    })
    var div2 = $("<div>")
    $(div2).append(title2,amount)
    $(con2).append(div2,btn);
    $(btn).click(function(){
        window.location = "./thanks.html";
        localStorage.clear();
    })
})