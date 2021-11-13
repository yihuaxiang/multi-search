
(function() {

    function openBD(){
        try{
             var hashInfo = window.location.toString();

//            hashInfo = /wd=(.*?)&/.exec(hashInfo)[1];
            hashInfo = decodeURI(/wd=(.*)?&?/.exec(hashInfo)[1]);

//        hashInfo = hashInfo.substring(hashInfo.indexOf("q=") + 28,hashInfo.length);
  //      if(hashInfo.indexOf("&") > 0){
    //        hashInfo = hashInfo.substring(0,hashInfo.indexOf("&"));
      //  }

        var arr = hashInfo.split("+");
        hashInfo = arr.join("%20");
        var targetUrl = "https://www.sogou.com/web?query=" + hashInfo;
        console.log(targetUrl);

        var ofdom = document.getElementById("dbFrame");
        if(ofdom != null){
            ofdom.remove();
        }

        var html= '<iframe id="dbFrame" style="position: fixed;border:0px; top: 0px; right: 0px; border-left:1px blue solid; width: 50%; height: 100%; z-index: 10000000;" src="'+targetUrl+'"></iframe>';
        var body = document.body;

        var div = document.createElement("div");
        div.innerHTML = html;
        while(div.firstChild){
            body.appendChild(div.firstChild);
        }

        document.getElementById("searchform").style.width = "50%";
        document.getElementById("center_col").style.marginLeft = "20px";
        document.getElementById("rhs").style.marginLeft = "670px";

        }catch(e){
console.log(e);
        }
    }

    openBD();







function locationHashChanged() {

        try{
             var hashInfo = window.location.toString();
        hashInfo = hashInfo.substring(hashInfo.indexOf("q=") + 2,hashInfo.length);
        if(hashInfo.indexOf("&") > 0){
            hashInfo = hashInfo.substring(0,hashInfo.indexOf("&"));
        }

        var arr = hashInfo.split("+");
        hashInfo = arr.join("%20");
        var targetUrl = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=" + hashInfo;
        console.log(targetUrl);

        var ofdom = document.getElementById("dbFrame");
        if(ofdom != null){
            ofdom.remove();
        }

        var html= '<iframe id="dbFrame" style="position: fixed;border:0px; top: 0px; right: 0px; border-left:1px blue solid; width: 50%; height: 100%; z-index: 10000000;" src="'+targetUrl+'"></iframe>';
        var body = document.body;

        var div = document.createElement("div");
        div.innerHTML = html;
        while(div.firstChild){
            body.appendChild(div.firstChild);
        }

        document.getElementById("searchform").style.width = "50%";
        document.getElementById("center_col").style.marginLeft = "20px";
        document.getElementById("rhs").style.marginLeft = "670px";

        }catch(e){
console.log(e);
        }


}

window.onhashchange = locationHashChanged;

window.addEventListener("popstate", function(e) {
    console.log('test');
    locationHashChanged();
});
    // Your code here...
})();
