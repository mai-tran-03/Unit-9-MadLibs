$(".submit").click(function() {
    $(".story").fadeIn();
    $("h1").text("Thanks for making a Madlib!");
    $(".bckgrImg").css("background-image","url(https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3doeS1pcy1za3ktYmx1ZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==)");
});

//DO NOT TOUCH CODE BELOW! 
let storiesCreated = 0;
$("button").click(function() {
    storiesCreated = storiesCreated + 1;
    let name = $(".name-input").val();
    let transport = $(".transport-input").val();
    let adjective = $(".adjective-input").val();
    let time = $(".number-input").val();
    $(".story").append("<p>One day my friend, " + name + ", and I decided to take a trip to the beach, so we packed our bags and took the " + transport + " over. It was a " + adjective + " day at the beach! We ended up staying for " + time + " hours!</p>");
    $(".count").text(storiesCreated);
});