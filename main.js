let text1, text2;

text1 ="<h3>This is a sample text 1</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque laborum.   </p>"; 
text2 ="<h3>This is a sample text 2</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque laborum.   </p>"; 
text3 ="<h3>This is a sample text 3</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque laborum.   </p>"; 
text4 ="<h3>This is a sample text 4</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque laborum.   </p>"; 
text5 ="<h3>This is a sample text 5</h3><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque laborum.   </p>"; 

$(document).ready(function(){

$(".circle li:nth-child(1)").mouseover(function(){
    $('.box').html(text1);
});

$(".circle li:nth-child(2)").mouseover(function(){
    $('.box').html(text2);
});

$(".circle li:nth-child(3)").mouseover(function(){
    $('.box').html(text3);
});

$(".circle li:nth-child(4)").mouseover(function(){
    $('.box').html(text4);
});

$(".circle li:nth-child(5)").mouseover(function(){
    $('.box').html(text5);
});


// Slick

var $carousel = $('.carousel').flickity()
  .flickity('next')
  .flickity( 'select', 1 );
      
});

