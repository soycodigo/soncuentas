$(document).ready(function () {

    if ($(document).scrollTop() > 150) {

        // $(".divrub").css({visibility: 'visible',width:'270px'});
        $(".divrub").addClass('divmas');
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