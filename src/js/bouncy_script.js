'use strict'
$(window).ready(function(){
    $("#a1").addClass("begin_style");

    if( $("#a1").attr("class") ){
        $("#a2").click(function(){$("#a1").removeClass("begin_style");});
        $("#a3").click(function(){$("#a1").removeClass("begin_style");});
        $("#a4").click(function(){$("#a1").removeClass("begin_style");});
    }
});
