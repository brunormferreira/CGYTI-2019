$("a.write-email").click(function() {
    $("section.new-message").removeClass("invisible");
}
    );

$("li.new-message-close").click(function() {
    $("section.new-message").addClass("invisible");
})

$("label.search-email-box").click(function(){
    $(this).addClass("search-email-click");
    $("input.search-email").css('background-color', 'white');
})

$("body").click(function(event) {
    if(!$("label.search-email-box").is(event.target) && !$("input.search-email").is(event.target)){
        $("label.search-email-box").removeClass("search-email-click");
        $("input.search-email").css('background-color', '#f1f3f4');
    }
})