$(document).ready(function () {
    // function clock() {
    //     var date = new Date(),
    //         day = date.getDate(),
    //         month = date.getMonth(),
    //         monthArr = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    //         year = date.getFullYear(),
    //         hour = date.getHours(),
    //         min = date.getMinutes(),
    //         sec = date.getSeconds()
    //
    //     if (day < 10) day = "0" + day;
    //     if (hour < 10) hour = "0" + hour;
    //     if (min < 10) min = "0" + min;
    //     if (sec < 10) sec = "0" + sec;
    //
    //     document.getElementById("date").innerHTML = day + " " + monthArr[month] + " " + year;
    //     document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
    // }
    // var timer;
    // function clockStart() {
    //     timer = setInterval(clock, 1000);
    //     clock()
    // }
    // clockStart()
    // var lang = $('.lang');
    // lang.find('.title:not(.activ)').siblings('div').slideUp();
    // lang.find('.title').on('click', function () {
    //     $(this).siblings('div').stop().slideToggle(500);
    //
    //     if ($(this).hasClass('activ')) {
    //         $(this).removeClass('activ');
    //     } else {
    //         $(this).addClass('activ');
    //     }
    // });

    var slider = $('.slides');
    slider.owlCarousel({
        items: 1,
        dotsContainer: '.dots',
        loop: true,
        autoplay: true
    });
    var slider1 = $('.activeSlide');
    slider1.owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<", ">"]
    });
    $(function () {
        $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
        $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
    });
    $('#rangeSum').ionRangeSlider({
        min: 10,
        max: 5000,
        step: 10,
        postfix: "$",
        onStart: function (data) {
            $('#sum').val(data.from);
        },
        onChange:function (data) {
            $('#sum').val(data.from);
        }
    });

    var sumRange = $('#rangeSum').data('ionRangeSlider'),
        min = 10,
        max = 5000;

    $('#sum').on('change keyup', function () {
        var val = $(this).prop('value');
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }
        sumRange.update({
            from: val
        });
    });
})