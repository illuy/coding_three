$(document).ready(function(){
    $(window).scroll(function () {
        let Cscroll = $(this).scrollTop()
    
        if (Cscroll >= $('#HOME').offset().top) {
            $('nav li:nth-child(1)').addClass('show').siblings().removeClass('show')
        }
        if (Cscroll >= $('#TEAM').offset().top - 200) {
            $('nav li:nth-child(2)').addClass('show').siblings().removeClass('show')
            $('#TEAM').addClass('active')
        } else {
            $('#TEAM').removeClass('active')
        }
        if (Cscroll >= $('#MEMBER').offset().top - 200) {
            $('nav li:nth-child(3)').addClass('show').siblings().removeClass('show')
        }
    
        if (Cscroll >= $('#BOARD').offset().top - 200) {
            $('nav li:nth-child(4)').addClass('show').siblings().removeClass('show')
        }
    
    })


    $(document).ready(function () {

        $(".tab_title li").click(function () {
            var idx = $(this).index();
            $(".tab_title li").removeClass("on");
            $(".tab_title li").eq(idx).addClass("on");
            // $(".tab_cont > div").hide();
            $(".tab_cont > div").eq(idx).css({'display': 'flex'}).siblings().hide();
        })


        $(".tab-cont > div:not(:first)").hide();
        $(".tab_btn li").click(function () {
            $(".tab_btn li").removeClass("active");
            $(this).addClass("active");

            var activeTab = $(this).attr("data-target");
            $(".tab-cont > div").hide();
            $("#" + activeTab).show();
        });

        $(".wForm2 input,textarea").click(function(){
            $(this).siblings('label').addClass("active")
        })


    });
})


