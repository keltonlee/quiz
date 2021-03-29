function change() {
    $(document).ready(function() {
        $("button").click(function() {
            $("#He").text("CSIE@CGU");
        });

        $("button").click(function() {
            $("#Par").text("怎麼那麼棒！！.");
        });
    });
}

function myFunction() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Change this document.";
    document.body.appendChild(btn);
    btn.addEventListener("click", change);
}