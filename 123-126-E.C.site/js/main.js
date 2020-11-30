$(document).ready(function(){
    $(".portfulio-list").masonry({
        horizontalOrder: true,
         percentPosition: true   
    });
    $(".single-portfulio-item").hover(function(){
        $(".single-portfulio-item .portfulio-hover h2").removeClass("animate__animated animate__flip");
        $(this).find(".portfulio-hover h2").addClass("animate__animated animate__flip")
    });
    $(".manu-triger").on('click', function(){
        $(".offcanvas-manu").addClass("active");
        $(".offcanvas-manu-overlay").addClass("active");
        
    });
    $(".manu-close,.offcanvas-manu-overlay").on('click', function(){
        $(".offcanvas-manu").removeClass("active");
        $(".offcanvas-manu-overlay").removeClass("active");
    });
    $(".header-area").headroom();
});