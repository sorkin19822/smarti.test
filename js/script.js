$( document ).ready(function() {
    $( ".addrule" ).click(function() {
        fieldRule = $('.field:last').clone().appendTo('.field:last')
    });
});