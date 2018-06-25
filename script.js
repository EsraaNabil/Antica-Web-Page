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
    $("button").click(function(){
        for(i=0;i<$("input").length;i++){
            $("input").val("");
        }  
    });
    
});




    