
$(document).ready(()=>{
    $('header').sticky({topSpacing:0, center:true, zIndex:5});

    $('header').on('sticky-start', ()=>{
        $('header').css({'background':'white', 'color':'black'});
    })
    $('header').on('sticky-end', ()=>{
        $('header').css({'background':'', 'color':''});
    })

})

const smallerCursor = document.querySelector('.small-cursor');


this.addEventListener("mousemove", function(e){

    smallerCursor.style.top= `${e.pageY}px`;
    smallerCursor.style.left = `${e.pageX -5}px`;
    


});
;

let cursor = curDot({
    zIndex: 10,
    diameter: 60,
    borderWidth: 1,
    borderColor: 'Orange',
    easing: 4,
    background: 'tranparent'
})

