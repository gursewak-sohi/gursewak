 


const myscript = () => {  
 
    // scroll to top button
    if ($("#goToTop").length > 0) {
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 500) {
                $("#goToTop").removeClass("opacity-0 invisible scale-0").addClass("opacity-1 visible scale-1");
            }
            else {
                $("#goToTop").removeClass("opacity-1 visible scale-1").addClass("opacity-0 invisible scale-0");
            }
        });
    }


    // toggle menu
    if ($("#toggleMenu").length > 0) {
        $("#toggleMenu").click(function () {
            $("#navBar").toggleClass("menu-close");
            $("#navBar").toggleClass("menu-open");
        });
    }

     // shuffle portfolio
    if ($(".shuffle-container").length > 0) {
        var Shuffle = window.Shuffle;
            var element = $(".shuffle-container")
            var shuffleInstance = new Shuffle(element, {
                itemSelector: "li"
        });

        $(".shuffle-filter li a").on("click", function (e) {
            e.preventDefault();
            $(".shuffle-filter li").removeClass("selected");
            $(this).parent("li").addClass("selected");
            var keyword = $(this).parent("li").attr("data-target");
            shuffleInstance.filter(keyword);
        });
    }
    
    // portfolio swiper
    if ($("#portfolioSlider").length > 0) {
        var swiper = new Swiper("#portfolioSlider", {
            slidesPerView: "auto",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
    
    // testimonials swiper
    if ($("#testimonials").length > 0) {
        var swiper = new Swiper("#testimonials", {
            slidesPerView: "1",
            effect: "fade",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
   

    
    // gsap animations
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
        toggleActions: "play none none none",
        start: "top 90%",
    });
    
    if ($(".animate-up-x").length > 0) {
        gsap.utils.toArray('.animate-up-x').forEach((item, index) => { 
            let timeLine = gsap.timeline({
                scrollTrigger:{
                    trigger: item,
                }
            });
            timeLine.from(item, {
                y: 100,
                opacity: 0,
                duration: 1,
                delay: index * 0.1,
                ease: "power2.out"
            });
        }); 
    }
    
    if ($(".animate-up-y").length > 0) {
        gsap.utils.toArray('.animate-up-y').forEach((item, index) => { 
            let timeLine = gsap.timeline({
                scrollTrigger:{
                    trigger: item,
                }
            });
            timeLine.from(item, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        });
    }

    if ($(".animate-image").length > 0) {
        gsap.utils.toArray('.animate-image').forEach((item, index) => { 
            let timeLine = gsap.timeline({
                scrollTrigger:{
                    trigger: item,
                }
            });
            timeLine.from(item, {
                y: 100,
                opacity: 0,
                scale: 1.3,
                duration: 1.5,
                ease: "power2.out"
            });
        });
    }

    if ($(".animate-image-cover").length > 0) {
        gsap.utils.toArray('.animate-image-cover').forEach((item, index) => { 
            let timeLine = gsap.timeline({
                scrollTrigger:{
                    trigger: item,
                }
            });
            timeLine.fromTo(item, {
                scaleX: 1,
            }, {
                scaleX: 0,
                duration: 1,
                ease: "power2.out"
            });
        });
    }
   
    if ($(".animate-zoomout").length > 0) {
        let zoomTl = new TimelineLite();
        zoomTl.fromTo(".animate-zoomout", {scale: 1.6 }, {scale: 1, duration: 1.5,  ease: "power2.out"});
    }

}



 