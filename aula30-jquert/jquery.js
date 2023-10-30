$(function(){  
    $(".btn").on("click", function(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        $(".class1")
            .css("background-color", "#" + randomColor);
    });
});