 
 
 
 
 
 $(document).ready(function(){
    

   $('.home').animate({
    width : "100%",
 
    
       }    ,2000 ,function() {
$('.home').animate({

height :"120vh" 

} ,2000 , function(){
$('.home h1').slideDown(1000 ,function(){

$('img').eq(0).slideDown(1000 ,function(){
    $('img').eq(1).slideDown(1000,function(){
        $('img').eq(2).slideDown(1000 ,function(){
            $('.card-text').eq(0).slideDown(1000 ,function(){
                $('.card-text').eq(1).slideDown(1000 ,function(){

                    $('.card-text').eq(2).slideDown(1000 )
                })



            })

            
        })
    })
})


})



})


       })



});