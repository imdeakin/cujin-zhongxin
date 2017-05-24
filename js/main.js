// 设置当前日期
(function () {
    var today = new Date();
    var week = '星期';
    switch (today.getDay()) {
        case 1:
            week += '一';
            break;
        case 2:
            week += '二';
            break;
        case 3:
            week += '三';
            break;
        case 4:
            week += '四';
            break;
        case 5:
            week += '五';
            break;
        case 6:
            week += '六';
            break;
        default:
            week += '日'
    }
    $('#header-bar .today').text(today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日 ' + week)
})();