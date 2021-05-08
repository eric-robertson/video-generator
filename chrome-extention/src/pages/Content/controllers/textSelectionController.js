// Allow choose a block of text

function enterHandler(e) {
    var target = $(e.target);
    target.addClass("Highlight-Text")
}

function leaveHandler(e){
    var target = $(e.target);
    target.removeClass("Highlight-Text")
}

$("div").mouseenter(enterHandler);
$("div").mouseleave(leaveHandler);