// window.onload = function () {
//     function clock() {
//         var date = new Date(),
//             day = date.getDate(),
//             month = date.getMonth(),
//             monthArr = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
//             year = date.getFullYear(),
//             hour = date.getHours(),
//             min = date.getMinutes(),
//             sec = date.getSeconds()
//
//         if (day < 10) day = "0" + day;
//         if (hour < 10) hour = "0" + hour;
//         if (min < 10) min = "0" + min;
//         if (sec < 10) sec = "0" + sec;
//
//         document.getElementById("date").innerHTML = day + " " + monthArr[month] + " " + year;
//         document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
//     }
//     var timer;
//     function clockStart() {
//         timer = setInterval(clock, 1000);
//         clock()
//     }
//     clockStart()
// }