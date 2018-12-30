'use strict'

$(window).ready(function(){
    //service_about
    $("#a1").addClass("begin_style");

    $("#a1").click(function(){
        $("#a1").addClass("begin_style");
        $("#a2").removeClass("begin_style");
        $("#a3").removeClass("begin_style");
        $("#a4").removeClass("begin_style");
    });
    $("#a2").click(function(){
        $("#a1").removeClass("begin_style");
        $("#a2").addClass("begin_style");
        $("#a3").removeClass("begin_style");
        $("#a4").removeClass("begin_style");
    });
    $("#a3").click(function(){
        $("#a1").removeClass("begin_style");
        $("#a2").removeClass("begin_style");
        $("#a3").addClass("begin_style");
        $("#a4").removeClass("begin_style");
    });
    $("#a4").click(function(){
        $("#a1").removeClass("begin_style");
        $("#a2").removeClass("begin_style");
        $("#a3").removeClass("begin_style");
        $("#a4").addClass("begin_style");
    });

    //portfolio
    $("#spmi1").addClass("selected_portfolio_menu_item");
    $("#spmi1").click(function(){
        $("#spmi1").addClass("selected_portfolio_menu_item");
        $("#spmi2").removeClass("selected_portfolio_menu_item");
        $("#spmi3").removeClass("selected_portfolio_menu_item");
        $("#spmi4").removeClass("selected_portfolio_menu_item");
        $("#spmi5").removeClass("selected_portfolio_menu_item");
        $("#spmi6").removeClass("selected_portfolio_menu_item");
        $("#spmi7").removeClass("selected_portfolio_menu_item");
    });
    $("#spmi2").click(function(){
        $("#spmi1").removeClass("selected_portfolio_menu_item");
        $("#spmi2").addClass("selected_portfolio_menu_item");
        $("#spmi3").removeClass("selected_portfolio_menu_item");
        $("#spmi4").removeClass("selected_portfolio_menu_item");
        $("#spmi5").removeClass("selected_portfolio_menu_item");
        $("#spmi6").removeClass("selected_portfolio_menu_item");
        $("#spmi7").removeClass("selected_portfolio_menu_item");
    });
    $("#spmi3").click(function(){
        $("#spmi1").removeClass("selected_portfolio_menu_item");
        $("#spmi2").removeClass("selected_portfolio_menu_item");
        $("#spmi3").addClass("selected_portfolio_menu_item");
        $("#spmi4").removeClass("selected_portfolio_menu_item");
        $("#spmi5").removeClass("selected_portfolio_menu_item");
        $("#spmi6").removeClass("selected_portfolio_menu_item");
        $("#spmi7").removeClass("selected_portfolio_menu_item");
    });
    $("#spmi4").click(function(){
        $("#spmi1").removeClass("selected_portfolio_menu_item");
        $("#spmi2").removeClass("selected_portfolio_menu_item");
        $("#spmi3").removeClass("selected_portfolio_menu_item");
        $("#spmi4").addClass("selected_portfolio_menu_item");
        $("#spmi5").removeClass("selected_portfolio_menu_item");
        $("#spmi6").removeClass("selected_portfolio_menu_item");
        $("#spmi7").removeClass("selected_portfolio_menu_item");
    });
    $("#spmi5").click(function(){
        $("#spmi1").removeClass("selected_portfolio_menu_item");
        $("#spmi2").removeClass("selected_portfolio_menu_item");
        $("#spmi3").removeClass("selected_portfolio_menu_item");
        $("#spmi4").removeClass("selected_portfolio_menu_item");
        $("#spmi5").addClass("selected_portfolio_menu_item");
        $("#spmi6").removeClass("selected_portfolio_menu_item");
        $("#spmi7").removeClass("selected_portfolio_menu_item");
    });
    $("#spmi6").click(function(){
        $("#spmi1").removeClass("selected_portfolio_menu_item");
        $("#spmi2").removeClass("selected_portfolio_menu_item");
        $("#spmi3").removeClass("selected_portfolio_menu_item");
        $("#spmi4").removeClass("selected_portfolio_menu_item");
        $("#spmi5").removeClass("selected_portfolio_menu_item");
        $("#spmi6").addClass("selected_portfolio_menu_item");
        $("#spmi7").removeClass("selected_portfolio_menu_item");
    });
    $("#spmi7").click(function(){
        $("#spmi1").removeClass("selected_portfolio_menu_item");
        $("#spmi2").removeClass("selected_portfolio_menu_item");
        $("#spmi3").removeClass("selected_portfolio_menu_item");
        $("#spmi4").removeClass("selected_portfolio_menu_item");
        $("#spmi5").removeClass("selected_portfolio_menu_item");
        $("#spmi6").removeClass("selected_portfolio_menu_item");
        $("#spmi7").addClass("selected_portfolio_menu_item");
    });
    
});

function checkWidthWorkBlock(){
    for(var i = 1; i < 5; i++){
        for(var j = 1; j < 4; j++){
            if( $(".column:nth-child(" + i + ") .work_block:nth-child(" + j + ") img").height() <= 215 ){
                $(".column:nth-child(" + i + ") .work_block:nth-child(" + j + ") .blackout .bl_inner .buttons").addClass("mkb");
                $(".column:nth-child(" + i + ") .work_block:nth-child(" + j + ") .blackout .bl_inner .buttons").removeClass("mnb");
            }else if( $(".column:nth-child(" + i + ") .work_block:nth-child(" + j + ") img").height() <= 235 ){
                $(".column:nth-child(" + i + ") .work_block:nth-child(" + j + ") .blackout .bl_inner .buttons").addClass("mnb");
                $(".column:nth-child(" + i + ") .work_block:nth-child(" + j + ") .blackout .bl_inner .buttons").removeClass("mkb");
            }else{
                $(".column:nth-child(" + i + ") .work_block:nth-child(" + j + ") .blackout .bl_inner .buttons").removeClass("mkb");
                $(".column:nth-child(" + i + ") .work_block:nth-child(" + j + ") .blackout .bl_inner .buttons").removeClass("mnb");
            }
        }
    }
}

function getAllWorks(){
    //column1
    $(".column:nth-child(1) .work_block:nth-child(1) img").attr(
        "src", "../resources/img/the_portfolio/col1_img1.jpg");
    $(".column:nth-child(1) .work_block:nth-child(2) img").attr(
        "src", "../resources/img/the_portfolio/col1_img2.jpg");
    $(".column:nth-child(1) .work_block:nth-child(3) img").attr(
        "src", "../resources/img/the_portfolio/col1_img3.jpg");
    //column2
    $(".column:nth-child(2) .work_block:nth-child(1) img").attr(
        "src", "../resources/img/the_portfolio/col2_img1.jpg");
    $(".column:nth-child(2) .work_block:nth-child(2) img").attr(
        "src", "../resources/img/the_portfolio/col2_img2.jpg");
    $(".column:nth-child(2) .work_block:nth-child(3) img").attr(
        "src", "../resources/img/the_portfolio/col2_img3.jpg");
    //column3
    $(".column:nth-child(3) .work_block:nth-child(1) img").attr(
        "src", "../resources/img/the_portfolio/col3_img1.jpg");
    $(".column:nth-child(3) .work_block:nth-child(2) img").attr(
        "src", "../resources/img/the_portfolio/col3_img2.jpg");
    $(".column:nth-child(3) .work_block:nth-child(3) img").attr(
        "src", "../resources/img/the_portfolio/col3_img3.jpg");
    //column4
    $(".column:nth-child(4) .work_block:nth-child(1) img").attr(
        "src", "../resources/img/the_portfolio/col4_img1.jpg");
    $(".column:nth-child(4) .work_block:nth-child(2) img").attr(
        "src", "../resources/img/the_portfolio/col4_img2.jpg");
    $(".column:nth-child(4) .work_block:nth-child(3) img").attr(
        "src", "../resources/img/the_portfolio/col4_img3.jpg");
    checkWidthWorkBlock()
}

function getPrints(){
    $(".column .work_block img").attr(
        "src", "../resources/img/the_portfolio/col3_img1.jpg");
    checkWidthWorkBlock()
}
function getIdentitys(){
    $(".column .work_block img").attr(
        "src", "../resources/img/the_portfolio/col2_img3.jpg");
    checkWidthWorkBlock();
}

function getBrandings(){
    $(".column .work_block img").attr(
        "src", "../resources/img/the_portfolio/col4_img1.jpg");
    checkWidthWorkBlock();
}

function getWebs(){
    $(".column .work_block img").attr(
        "src", "../resources/img/the_portfolio/col4_img3.jpg");
    checkWidthWorkBlock();
}

function getHTMLs(){
    $(".column .work_block img").attr(
        "src", "../resources/img/the_portfolio/col2_img2.jpg");
    checkWidthWorkBlock();
}

function getWordpresses(){
    $(".column .work_block img").attr(
        "src", "../resources/img/the_portfolio/col2_img1.jpg");
    checkWidthWorkBlock();
}