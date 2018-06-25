$( document ).ready(function() {
    $("input").change(function(){
        if($(this).val().length<5){
            $(this).next().css("display","block");
        }
        else{
            $(this).next().css("display","none");
        }
    });
    $("input").keyup(function(){
        if($(this).val().length>5){
            $(this).next().css("display","none");
        }
    });
    $(".send").click(function(){
        if($("input").eq(0).val().length >=5 && $("input").eq(1).val().length>=5 &&$("input").eq(2).val().length>=5 &&$("input").eq(3).val().length>=5){
            $("input").val("");
            $(this).next().css("display","none");
        }
        else{
            $(this).next().css("display","block");
        }
    });
    
});




    