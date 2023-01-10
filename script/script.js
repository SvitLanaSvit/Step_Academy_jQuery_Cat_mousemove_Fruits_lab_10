//-------1-------
$(()=>{
    $("#main").bind("mousemove", function(event){
        $("#image").css({"left" : event.pageX, "top" : event.pageY});
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