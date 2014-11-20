$(document).ready(function () {
    var feature = (function () {
        var initItems = function () {
            var items = loadAllItems();

            _(items).each(function (item) {
                var addCart = '<button>加入购物车</button>';
                var listItem = $('<tr>\
                            <td>' + item.name + '</td>\
                            <td>' + item.price + '</td>\
                            <td>' + item.unit + '</td>\
                            <td>' + addCart + '</td>\
                          </tr>');
                $('#item-table').append(listItem);
            });
        };
	var cartPath = $("#count");
	$('#item-table').on('click', 'button', function(){
	//var path = $(this).closest('#item-table').parent().siblings().find('#count');
		var count = +cartPath.text()+1;
		cartPath.text(count);
	});
        var printDate = function() {
            $("#pay-date").text(utils.getDate());
        };

        return {
            init: initItems,
            printDate: printDate
        };
    })();

    feature.init();
    feature.printDate();
});

