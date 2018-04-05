import '../scss/style.scss';
let $ = require('jquery');

$(document).on('scroll', function(){
    let scrollTop = $(document).scrollTop();
    if (scrollTop > 5){
        $('#nav').addClass('-sticky');
    }
    else{
        $('#nav').removeClass('-sticky');
    }
})

$('#trigger-menu').on('click', function(){
    $('#menu').toggleClass('-toggle');
})

$(document).ready(function(){
    $('._js-anchor').on('click', function(event){
        $('#menu').removeClass('-toggle');
        let target = this.hash.slice(1),
            hash = this.hash,
            targetTop = $('#'+target).offset().top;
        $('html, body').animate({ scrollTop: targetTop }, 600, history.pushState(null,null,hash))
        event.preventDefault();
    })
})
