$( document ).ready(function() {
    $( ".addrule" ).click(function() {
        $(".field:last").clone().appendTo(".fields");
    });

});

function deleteField(elem) {
    if($(".field").length>1) $(elem).closest(".field").remove()

}