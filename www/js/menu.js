$(document).ready(main);

var flag = 1;

function main(){
    $('.menu_bar').click(function(){
        if(flag == 1){
            $('nav').animate({
                left: '0'
            });
            flag = 0;
        } else {
            $('nav').animate({
                left: '-100%'
            });
            flag = 1;
        }
    });
};