$(document).ready(function() {
    $(".choose-size__size").click(function(e) {
        e.preventDefault();
        $(".choose-size__size").removeClass("choose-size__size_active");
        $(this).addClass("choose-size__size_active");
        $("#size").val($(this).attr("value"));
    });
});

