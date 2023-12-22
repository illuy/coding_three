$(window).scroll(function () {
    let Cscroll = $(this).scrollTop()

    if (Cscroll >= $('#HOME').offset().top) {
        $('nav li:nth-child(1)').addClass('show').siblings().removeClass('show')
    }

    if (Cscroll >= $('#TEAM').offset().top - 200) {
        $('nav li:nth-child(2)').addClass('show').siblings().removeClass('show')
        $('#Design').addClass('active')
    } else {
        $('#Design').removeClass('active')
    }

    if (Cscroll >= $('#MEMBER').offset().top) {
        $('nav li:nth-child(3)').addClass('show').siblings().removeClass('show')
    }

    if (Cscroll >= $('#BOARD').offset().top) {
        $('nav li:nth-child(4)').addClass('show').siblings().removeClass('show')
    }

})