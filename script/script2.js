//-------2-------
$(()=>{
    $(".button").bind("mouseenter", function(){
        var color = $(this).css('background-color');
        console.log(color);
        $(this).css('box-shadow', '0px 0px 8px 3px #000000');

        var list = $(".conteinerFruits").children();
        list.each((index,elem) =>{
        console.log($(elem).css('background-color'));
            if($(elem).css('background-color') == color){
                $(elem).css('box-shadow', '0px 0px 8px 3px #000000');
            }
        });
    });
});

$(()=>{
    $(".button").bind("mouseout", function(){
        var color = $(this).css('background-color');
        $(this).css('box-shadow', '0px 0px 8px 3px #FFFFFF');

        var list = $(".conteinerFruits").children();
        list.each((index,elem) =>{
            if($(elem).css('background-color') == color){
                $(elem).css('box-shadow', '0px 0px 8px 3px #FFFFFF');
            }
        });
    })
});