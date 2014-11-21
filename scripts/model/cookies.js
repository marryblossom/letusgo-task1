function cookies (key,value){
  this.key = key;
  this.value = value;
}

cookies.prototype.setCookie = function (){
    var Days = 10;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = this.key + "="+ escape (this.value) + ";expires=" + exp.toGMTString();
    alert(document.cookie);
};

cookies.prototype.getCookie = function (){
  var arr,reg=new RegExp("(^| )"+this.key+"=([^;]*)(;|$)");
  arr = document.cookie;
  return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
};

cookies.prototype.delCookie = function (){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(this.key);
    if(cval != null)
        document.cookie= this.key + "=" +cval+ ";expires=" +exp.toGMTString();
};
