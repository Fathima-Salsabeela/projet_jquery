$("#ab").on('mouseover' , function(){
    console.log($("#ab"));
});

$("#cd").on('mouseover' , function(){
    console.log($("#cd"));
});

$("#ef").on('mouseover' , function(){
    console.log($("#ef"));
});

$("#gh").on('mouseover' , function(){
    console.log($("#gh"));
});

console.log($("#gh").text());
$("#gh").text("div 123456");


$("#ef").on("click", function(){
    console.log($("#ef").text());
    $("#ef").text("Bienvenue sur ma page");
    
});

$("#ab").on("mouseover", function(){
    console.log($("#ab").text());
    $("#ab").text("Des sujets trés intéressants sont ici");
    
});


$("#cd").on("click", function(){
    console.log($("#cd").text());
    $("#cd").text("J'aime coder");
    
});
