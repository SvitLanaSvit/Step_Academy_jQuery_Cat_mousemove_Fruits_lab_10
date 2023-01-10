//-------1-------
$(()=>{
    $("#main").bind("mousemove", function(event){
        let height = $("#image").css("height").replace('px','');
        let width = $("#image").css("width").replace('px','');
        let x = event.pageX < (window.innerWidth - width) ? event.pageX : window.innerWidth - width;
        let y = event.pageY < (window.innerHeight - height) ? event.pageY : window.innerHeight - height;
        $("#image").css({"left" : x, "top" : y});
    })
});

//-------2-------
$(()=>{
    $(".button").bind("mouseenter", function(){
        $(this).css('box-shadow', '0px 0px 8px 3px #000000');
    });
});

$(()=>{
    $(".button").bind("mouseout", function(){
        $(this).css('box-shadow', '0px 0px 8px 3px #FFFFFF');
    })
});

$(()=>{
    $('.button').bind('click', function(){
        var color = $(this).css('background-color');

        var list = $(".conteinerFruits").children();
        list.each((index,elem) =>{
        console.log($(elem).css('background-color'));
            if($(elem).css('background-color') == color){
                $(elem).css('box-shadow', '0px 0px 8px 3px #000000');
            }

            if($(elem).css('background-color') != color){
                $(elem).css('box-shadow', '0px 0px 8px 3px #FFFFFF');
            }
        });
    });
});