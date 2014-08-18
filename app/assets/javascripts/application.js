// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require bootbox
// require jquery.easing
//= require bootstrap-notify
//= require bootstrap-hover-dropdown
//= require dataTables/jquery.dataTables
//= require dataTables/jquery.dataTables.bootstrap
//= require jquery.transit.min
// require example
// require_tree .

$('document').ready(function()
{
    $('#tooltip').hover(function()
    {
        $(this).tooltip('show');
    },
    function(){
        $(this).tooltip('hide');
    }); 
});



$('document').ready(function()
{
	$('.brand').hover(
    	function(){
        $(this).stop().fadeTo("slow",1);
    	},
    	function(){
    		$(this).stop().fadeTo("slow",0.7);
	});
 
});

$(window).load(function(){
        $('.modall').fadeOut(2000);
    });