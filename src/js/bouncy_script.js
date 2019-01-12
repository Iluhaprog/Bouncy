'use strict'

//service
function setStyleServiceBlock(id, removeIds,styleName){
    $(id).click(function(){
        $(id).addClass(styleName);
        $(removeIds[0]).removeClass(styleName);
        $(removeIds[1]).removeClass(styleName);
        $(removeIds[2]).removeClass(styleName);
    });
}

//portfolio
function setStylePortfolioBlock(id, removeIds, styleName){
    $(id).click(function(){
        $(id).addClass(styleName);
        $(removeIds[0]).removeClass(styleName);
        $(removeIds[1]).removeClass(styleName);
        $(removeIds[2]).removeClass(styleName);
        $(removeIds[3]).removeClass(styleName);
        $(removeIds[4]).removeClass(styleName);
        $(removeIds[5]).removeClass(styleName);
    });
}

function setStyleSliderByNavButton(id, removeIds, blocksName, styleNameBtn, styleNameBlock,  animateLine, changeCard){
    $(id).click(function(){
        $(id).addClass(styleNameBtn);
        $(removeIds[0]).removeClass(styleNameBtn);
        $(removeIds[1]).removeClass(styleNameBtn);
        $(blocksName[0]).animate({"opacity": 1}, 300);
        $(blocksName[0]).addClass(styleNameBlock);
        $(blocksName[1]).animate({"opacity": 0}, 300);
        $(blocksName[1]).removeClass(styleNameBlock);
        $(blocksName[2]).animate({"opacity": 0}, 300);
        $(blocksName[2]).removeClass(styleNameBlock);
    });
}

function setLineWidth(idLine, idButton,width){
    $(idButton).click(function(){
        $(idLine).animate({"width": width + "%"}, 300);
    });
}

function changeProcentNumberInCard(cards, procents){
    for(var i = 0; i < 3; i++){
        $(cards[i] + " .qualitie:nth-child(" + (i + 1) + ") .qualitie_text_style:nth-child(2)").html(procents[i] + " %");
    }
}

//service_about
$("#a1").addClass("begin_style");
setStyleServiceBlock("#a1", ["#a2", "#a3", "#a4"], "begin_style");
setStyleServiceBlock("#a2", ["#a1", "#a3", "#a4"], "begin_style");
setStyleServiceBlock("#a3", ["#a1", "#a2", "#a4"], "begin_style");
setStyleServiceBlock("#a4", ["#a1", "#a2", "#a3"], "begin_style");

//portfolio
$("#spmi1").addClass("selected_portfolio_menu_item");
setStylePortfolioBlock("#spmi1", ["#spmi2", "#spmi3", "#spmi4", "#spmi5", "#spmi6", "#spmi7"], "selected_portfolio_menu_item");
setStylePortfolioBlock("#spmi2", ["#spmi1", "#spmi3", "#spmi4", "#spmi5", "#spmi6", "#spmi7"], "selected_portfolio_menu_item");
setStylePortfolioBlock("#spmi3", ["#spmi1", "#spmi2", "#spmi4", "#spmi5", "#spmi6", "#spmi7"], "selected_portfolio_menu_item");
setStylePortfolioBlock("#spmi4", ["#spmi1", "#spmi2", "#spmi3", "#spmi5", "#spmi6", "#spmi7"], "selected_portfolio_menu_item");
setStylePortfolioBlock("#spmi5", ["#spmi1", "#spmi2", "#spmi3", "#spmi4", "#spmi6", "#spmi7"], "selected_portfolio_menu_item");
setStylePortfolioBlock("#spmi6", ["#spmi1", "#spmi2", "#spmi3", "#spmi4", "#spmi5", "#spmi7"], "selected_portfolio_menu_item");
setStylePortfolioBlock("#spmi7", ["#spmi1", "#spmi2", "#spmi3", "#spmi4", "#spmi5", "#spmi6"], "selected_portfolio_menu_item");


//team
setStyleSliderByNavButton("#btn1", ["#btn2", "#btn3"], [".card:nth-child(1)", ".card:nth-child(2)", ".card:nth-child(3)"], "selected_nav_btn", "selected_card",
                        [setLineWidth(".ln1", "#btn1", 80), setLineWidth(".ln2", "#btn1", 65), setLineWidth(".ln3", "#btn1", 75)], 
                        changeProcentNumberInCard([".card:nth-child(1)", ".card:nth-child(1)", ".card:nth-child(1)"], [80, 65, 75]));
setStyleSliderByNavButton("#btn2", ["#btn1", "#btn3"], [".card:nth-child(2)", ".card:nth-child(1)", ".card:nth-child(3)"], "selected_nav_btn", "selected_card",
                        [setLineWidth(".ln1", "#btn2", 90), setLineWidth(".ln2", "#btn2", 45), setLineWidth(".ln3", "#btn2", 80)], 
                        changeProcentNumberInCard([".card:nth-child(2)", ".card:nth-child(2)", ".card:nth-child(2)"], [90, 45, 80]));
setStyleSliderByNavButton("#btn3", ["#btn1", "#btn2"], [".card:nth-child(3)", ".card:nth-child(1)", ".card:nth-child(2)"], "selected_nav_btn", "selected_card",
                        [setLineWidth(".ln1", "#btn3", 95), setLineWidth(".ln2", "#btn3", 75), setLineWidth(".ln3", "#btn3", 45)], 
                        changeProcentNumberInCard([".card:nth-child(3)", ".card:nth-child(3)", ".card:nth-child(3)"], [95, 75, 45]));

//testimonails
setStyleSliderByNavButton("#btn4", ["#btn5", "#btn6"], [".testimonial:nth-child(1)", ".testimonial:nth-child(2)", ".testimonial:nth-child(3)"], "selected_nav_btn", "selected_testimonial", undefined);
setStyleSliderByNavButton("#btn5", ["#btn4", "#btn6"], [".testimonial:nth-child(2)", ".testimonial:nth-child(1)", ".testimonial:nth-child(3)"], "selected_nav_btn", "selected_testimonial", undefined);
setStyleSliderByNavButton("#btn6", ["#btn4", "#btn5"], [".testimonial:nth-child(3)", ".testimonial:nth-child(1)", ".testimonial:nth-child(2)"], "selected_nav_btn", "selected_testimonial", undefined);

//blog
setStyleSliderByNavButton("#btn7", ["#btn8", "#btn9"], [".bl_slide:nth-child(1)", ".bl_slide:nth-child(2)", ".bl_slide:nth-child(3)"], "blog_selected_nav_btn", "selected_slide", undefined);
setStyleSliderByNavButton("#btn8", ["#btn7", "#btn9"], [".bl_slide:nth-child(2)", ".bl_slide:nth-child(1)", ".bl_slide:nth-child(3)"], "blog_selected_nav_btn", "selected_slide", undefined);
setStyleSliderByNavButton("#btn9", ["#btn7", "#btn8"], [".bl_slide:nth-child(3)", ".bl_slide:nth-child(1)", ".bl_slide:nth-child(2)"], "blog_selected_nav_btn", "selected_slide", undefined);

function setCircleStyle(id, procent){
    $(id).css({
        "stroke-dashoffset": 376.8 * procent/100
    });
}
function setProcentText(index, prozent){
    $(".default_skill_block:nth-child(" + index + ") .prozent").html(prozent + "<span>%</span>");
}


window.onscroll = function(){
    if (window.pageYOffset > 2285 && window.pageYOffset < 2930){
        setCircleStyle("#c1", 80);
        setCircleStyle("#c2", 75);
        setCircleStyle("#c3", 60);
        setProcentText(1, 80);
        setProcentText(2, 75);
        setProcentText(3, 60);
    }else{
        setCircleStyle("#c1", 0);
        setCircleStyle("#c2", 0);
        setCircleStyle("#c3", 0);
    }
}

$(window).ready(function(){
    //map
    $("#btd").click(function() {
        $(".contact_map .blackout").css({"display" : "none"});
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
    checkWidthWorkBlock();
}
//Services
function getGraphicDesing(){
    $(".service_text .mn_text .un_title").html("Graphic Design");
}
function getServiceBrandings(){
    $(".service_text .mn_text .un_title").html("Branding");
}
function getWebDesign(){
    $(".service_text .mn_text .un_title").html("Web Design");
}
function getUX(){
    $(".service_text .mn_text .un_title").html("UX/UI");
}

//PORTFOLIO
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