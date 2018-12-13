'use strict'

var numberImage1 = 1;
var numberImage2 = 1;
setInterval(
    function(){
        if ( numberImage1 == 1 ){
            document.getElementById("work1").style.backgroundImage="url(" + 
            "'../resources/img/featured_work/featured_work2_2.jpg')";
            numberImage1++
        }
        else{
            document.getElementById("work1").style.backgroundImage="url(" + 
            "'../resources/img/featured_work/featured_work2_1.jpg')";
            numberImage1--;
        }
    },
8000);


setInterval(
    function(){
        if ( numberImage2 == 1 ){
            document.getElementById("work2").style.backgroundImage="url(" + 
            "'../resources/img/featured_work/featured_work3_2.jpg')";
            numberImage2++
        }
        else{
            document.getElementById("work2").style.backgroundImage="url(" + 
            "'../resources/img/featured_work/featured_work3_1.jpg')";
            numberImage2--;
        }
    },
6000);