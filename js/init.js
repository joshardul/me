$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();
    $('.materialboxed').materialbox();
    $('.slider').slider({full_width: true});
    $('.collapsible').collapsible();
    $('ul.tabs').tabs();
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15,
    });
    $(document).ready(function() {
    $('select').material_select();
    });
});