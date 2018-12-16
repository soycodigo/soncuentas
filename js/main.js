$(document).ready(function () {

    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 150) {

            $(".divrub").css({visibility: 'visible',width:'54%'});
            //$(".divrub").addClass('divmas'); no funcionó en html5 puro
            $(".divrub").removeClass('divmenos');
            $("#divabs").hide('fadeOut');
            $("#divabs2").show();
            $("#navtelmail").hide('fadeOut');

        } else {

            $("#divabs").show('fadeOut');
            $("#navtelmail").show('fadeOut');
            $("#divabs2").hide();
            $(".divrub").addClass('divmenos');
            $(".divrub").removeClass('divmas');
            $(".divrub").addClass('divmenos');

        }
    });

});