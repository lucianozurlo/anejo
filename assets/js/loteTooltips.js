$loteTooltip = $(".loteTooltip");

$(document).ready(function () {
    $(".lote-path").css({
        stroke: "#ffffff",
        "stroke-width": 1,
    });
    $(".lote-path").each(function () {
        if ($(this).attr("disponible") === "No") {
            $(this).css("fill", "#ff6d3d44");
        }
    });

    $(".lote-path").hover(
        function () {
            $(this).attr("class", "lote-path");
            $loteTooltip.addClass("active");
            $loteTooltip.html(
                '<div class="lote">Lote: ' + $(this).attr("lote") + '</div>' +
                '<div class="superficie">Superficie: ' + $(this).attr("superficie") + ' m<sup>2</sup></div>' +
                '<div class="disponible">Disponible: ' + $(this).attr("disponible") + '</div>'
            );

            if ($(this).attr("disponible") === "No") {
                $loteTooltip.addClass("no");
                $lotePath.css("fill", "#ff6d3d");
            } else {
                $loteTooltip.removeClass("no");
                $lotePath.css("fill", "");
            }
        },
        function () {
            $loteTooltip.removeClass("active");
        }
    );
});

$(document).on("mousemove", function (e) {
    $loteTooltip.css({
        left: e.pageX,
        top: e.pageY - 70
    });
});
