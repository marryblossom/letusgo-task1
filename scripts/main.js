
var cartlist = [];
var cartPath = $("#count");
cartPath.text(cartlist.length);

$(document).ready(function () {

    var feature = (function () {
        var initItems = function () {
            var items = loadAllItems();
            _(items).each(function (item) {
                var addCart = '<button>加入购物车</button>';
                var listItem = $('<tr>\
                            <td class="barcode" hidden>' + item.barcode + '</td>\
                            <td>' + item.name + '</td>\
                            <td>' + item.price + '</td>\
                            <td>' + item.unit + '</td>\
                            <td>' + addCart + '</td>\
                          </tr>');
                $('#item-table').append(listItem);
            });
        };
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

  //**********calculate the number of total products are bought*****//
  var totalNum = 0;
  for(var i=0, number = $(".num").size(); i<number;i++){
    totalNum += parseInt($(".num")[i].innerHTML);
  }
  $("#count").text(totalNum);

  //**********calculate the number of total products are bought end*****//

  //******** cart number plus*************//
  $('#item-table').on('click', 'button', function(){
    var barcode = $(this).parent().siblings().first().text().toString();
    var item = itemHandle.getItemByBarCode(barcode);
  //******** product added to cart*************//
  var c = new cart(item, 1);
  cartlist.push(c);
  //******** product added to cart*************//
  cartPath.text(cartlist.length);
  });

//******** cart number plus end*************//
});
