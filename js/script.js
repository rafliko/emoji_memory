var deck = [
    "👽","😈","🤡","🐵","😺","🐞",
    "🦇","🥶","👻","🦋","💀","❤️",
    "🍕","🍔","🍟","🥩","🍉","🍐",
];

var card1 = null;
var card2 = null;
var t = 60;

$(document).ready(function(){
    var interval = setInterval(function(){
        t--;
        if(t==0) 
        {
            clearInterval(interval);
            $(".card").addClass("open");
            $("#timer").css("color","red");
        }
        $("#timer").html("TIMER: "+t);
    },1000);

    $(".card").click(function(){
        if(!$(this).hasClass("open") && !$(this).hasClass("destroyed"))
        {
            if(card1==null) 
            {
                card1=$(this);
                $(this).addClass("open");
            }
            else if(card2==null) 
            {
                card2=$(this);
                $(this).addClass("open");

                setTimeout(function(){
                    $(card1).removeClass("open");
                    $(card2).removeClass("open");
                    if(card1.find("span").html()==card2.find("span").html())
                    {
                        $(card1).addClass("destroyed");
                        $(card2).addClass("destroyed");
                    }
                    card1 = null;
                    card2 = null;
                    //alert($("body").find(".destroyed").length);
                    if($("body").find(".destroyed").length==20)
                    {
                        $("#timer").css("color","lime");
                        clearInterval(interval);
                    }
                },500);
            }
        }
    });

    for(let i=0;i<$(".card").length/2;i++)
    {
        for(let j=0;j<2;j++)
        {
            var c = $(".card").eq(Math.floor(Math.random() * $(".card").length));
            if(c.find("span").html()=="") c.find("span").html(deck[i]);
            else j--;
        }
    }
});