$( document ).ready(function() {
    $( ".addrule" ).click(function() {
        $(".field:last").clone().appendTo(".fields");
    });

    $( ".clear" ).click(function() {
        clear();
    });

});

function deleteField(elem) {
    if($(".field").length>1) $(elem).closest(".field").remove()
}

function clear() {
    $(".field").remove()
    $(".fields").html(renderField());
}

function renderField(){
    return str = "<div class=\"field\">\n" +
        "        <div class=\"uk-grid-small uk-margin-small uk-grid\" uk-grid=\"\">\n" +
        "            <div class=\"uk-width-1-4@s uk-first-column\">\n" +
        "                <select class=\"uk-select\" name=\"field\">\n" +
        "                    <option value=\"\" disabled=\"\" selected=\"\">Field...</option>\n" +
        "                    <option value=\"size\">size</option>\n" +
        "                    <option value=\"forks\">forks</option>\n" +
        "                    <option value=\"stars\">stars</option>\n" +
        "                    <option value=\"followers\">followers</option>\n" +
        "                </select>\n" +
        "            </div>\n" +
        "            <div class=\"uk-width-1-4@s\">\n" +
        "                <select class=\"uk-select\">\n" +
        "                    <option value=\"\" disabled=\"\" selected=\"\" name=\"operator\">Operator...</option>\n" +
        "                    <option value=\">\"> Больше </option>\n" +
        "                    <option value=\"<\"> Меньше </option>\n" +
        "                    <option value=\"=\"> Равно </option>\n" +
        "                </select>\n" +
        "            </div>\n" +
        "            <div class=\"uk-width-1-4@s\">\n" +
        "                <input class=\"uk-input\" type=\"number\" id=\"tentacles\" name=\"number\" min=\"0\" step=\"1\">\n" +
        "            </div>\n" +
        "            <div class=\"uk-width-1-4@s\">\n" +
        "                <a class=\"uk-button  uk-button-danger delete delete\" href=\"#\" onclick=\"deleteField(this)\">Delete</a>\n" +
        "\n" +
        "            </div>\n" +
        "\n" +
        "        </div>\n" +
        "        </div>"
}