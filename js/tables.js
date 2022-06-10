
$(document).ready(function() {
    console.log("JQuery works");
});

function showElement(element){
    let nuestroId = $(element).attr("href");
    console.log(nuestroId);
    $("table").hide();
    $(nuestroId).show();
}
