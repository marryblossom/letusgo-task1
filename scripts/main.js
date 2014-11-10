$(document).ready(function () {

    (function () {
        var items = loadAllItems();

        _(items).each(function (item) {
            var addCart = '<button class="btn btn-primary btm-sm">加入购物车</button>';
            var listItem = $('<tr class="list-item" data-barcode="' + item.barcode + '">\
                            <td class="item-name">' + item.name + '</td>\
                            <td>' + item.price + '</td>\
                            <td>' + item.unit + '</td>\
                            <td>' + addCart + '</td>\
                          </tr>');
            $('#item-table').append(listItem);
        });

        var dateDigitToString = function (num) {
            return num < 10 ? '0' + num : num;
        };
        var getDate = function () {
            var currentDate = new Date();
            var year = dateDigitToString(currentDate.getFullYear());
            var month = dateDigitToString(currentDate.getMonth() + 1);
            var date = dateDigitToString(currentDate.getDate());
            var hour = dateDigitToString(currentDate.getHours());
            var minute = dateDigitToString(currentDate.getMinutes());
            var second = dateDigitToString(currentDate.getSeconds());
            return  year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
        };

        $("#pay-date").text(getDate());
    })($);

});

