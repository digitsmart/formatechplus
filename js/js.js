$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#share').click(function(){
        $(this).toggleClass('share-active');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let height = $(this).height();
            let top = $(window).scrollTop();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top >= offset && top < height + offset){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.screen-slider').owlCarousel({
        loop:true,
        center:true,
        autoplay:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            710:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    $('.review-slider').owlCarousel({
        loop:true,
        center:true,
        autoplay:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            750:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

});


    attention = 1;
    function no()
    {
    if (attention == 1 && event.button == 2 || attention == 1 && event.button == 1+2){
    alert("Le boutton droit est bloqué. Ne réessaie pas ou la page restera bloquée")
    attention = 2;
    }
    else {
    if (attention == 2 && event.button == 2 || attention == 2 && event.button == 1+2){
    alert("Et voilà, fallait pas réessayer. La page est bloquée");        JavaScript:no();}
    }
    }
    document.onmousedown=no
 


function btnBasic() {
    var basic = document.getElementById("basic");
    var standar = document.getElementById("standar");
    var premium = document.getElementById("premium");
    if (basic.style.display === "none") {
        basic.style.display = "block";
        standar.style.display = "none";
        premium.style.display = "none";
    } else {
        basic.style.display = "block";
        standar.style.display = "none";
        premium.style.display = "none";
    }
    } 

function btnstandar() {
    var basic = document.getElementById("basic");
    var standar = document.getElementById("standar");
    var premium = document.getElementById("premium");
    if (standar.style.display === "none") {
        basic.style.display = "none";
        standar.style.display = "block";
        premium.style.display = "none";
    } else {
        basic.style.display = "none";
        standar.style.display = "block";
        premium.style.display = "none";
    }
    } 

    function btnpremium() {
        var basic = document.getElementById("basic");
        var standar = document.getElementById("standar");
        var premium = document.getElementById("premium");
        if (premium.style.display === "block") {
            basic.style.display = "none";
            standar.style.display = "none";
            premium.style.display = "block";
        } else {
            basic.style.display = "none";
            standar.style.display = "none";
            premium.style.display = "block";
        }
        }




        function btnBasicform() {
            var basicform = document.getElementById("basicform");
            var standarform = document.getElementById("standarform");
            var premiumform = document.getElementById("premiumform");
            if (basicform.style.display === "none") {
                basicform.style.display = "block";
                standarform.style.display = "none";
                premiumform.style.display = "none";
            } else {
                basicform.style.display = "block";
                standarform.style.display = "none";
                premiumform.style.display = "none";
            }
            } 
        
        function btnstandarform() {
            var basicform = document.getElementById("basicform");
            var standarform = document.getElementById("standarform");
            var premiumform = document.getElementById("premiumform");
            if (standarform.style.display === "none") {
                basicform.style.display = "none";
                standarform.style.display = "block";
                premiumform.style.display = "none";
            } else {
                basicform.style.display = "none";
                standarform.style.display = "block";
                premiumform.style.display = "none";
            }
            } 
        
            function btnpremiumform() {
                var basicform = document.getElementById("basicform");
                var standarform = document.getElementById("standarform");
                var premiumform = document.getElementById("premiumform");
                if (premiumform.style.display === "block") {
                    basicform.style.display = "none";
                    standarform.style.display = "none";
                    premiumform.style.display = "block";
                } else {
                    basicform.style.display = "none";
                    standarform.style.display = "none";
                    premiumform.style.display = "block";
                }
                }


                function btnBasicppt() {
                    var basicppt = document.getElementById("basicppt");
                    var standarppt = document.getElementById("standarppt");
                    var premiumppt = document.getElementById("premiumppt");
                    if (basicppt.style.display === "none") {
                        basicppt.style.display = "block";
                        standarppt.style.display = "none";
                        premiumppt.style.display = "none";
                    } else {
                        basicppt.style.display = "block";
                        standarppt.style.display = "none";
                        premiumppt.style.display = "none";
                    }
                    } 
                
                function btnstandarppt() {
                    var basicppt = document.getElementById("basicppt");
                    var standarppt = document.getElementById("standarppt");
                    var premiumppt = document.getElementById("premiumppt");
                    if (standarppt.style.display === "none") {
                        basicppt.style.display = "none";
                        standarppt.style.display = "block";
                        premiumppt.style.display = "none";
                    } else {
                        basicppt.style.display = "none";
                        standarppt.style.display = "block";
                        premiumppt.style.display = "none";
                    }
                    } 
                
                    function btnpremiumppt() {
                        var basicppt = document.getElementById("basicppt");
                        var standarppt = document.getElementById("standarppt");
                        var premiumppt = document.getElementById("premiumppt");
                        if (premiumppt.style.display === "none") {
                            basicppt.style.display = "none";
                            standarppt.style.display = "none";
                            premiumppt.style.display = "block";
                        } else {
                            basicppt.style.display = "none";
                            standarppt.style.display = "none";
                            premiumppt.style.display = "block";
                        }
                        }