var itemHandle = (function () {
  var getItemByBarCode = function (barCode){
    var items = loadAllItems();
    for(var i in items){
      var item = (barCode ==  items[i].barcode) ? items[i] : '';
      return item;
    }
  };
  return {
    getItemByBarCode: getItemByBarCode,
  };
})();
