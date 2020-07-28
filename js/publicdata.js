
function resetdata() {
    localStorage.clear();
    var	shouji = {
        img:"img/publicimg/shouji.png",
        name: "HUAWEI P40 Pro",
        banben:"5G 全网通 8GB+128GB",
        color:"零度白",
        taocan:"官方标配",
        price:"5988",
        number:"5",
    };

    var pingban = {
        img:"img/publicimg/pingban.png",
        name: "HUAWEI MatePad Pro 10.8英寸",
        rongliang:"6GB+128GB",
        banben:"WiFi",
        color:"夜阑灰",
        price:"3299",
        number:"2",
    }
    var account = "0";
    var str1 = JSON.stringify(shouji);
    var str2 = JSON.stringify(pingban);
    //存储数据项
    localStorage.setItem("account",account);
    localStorage.setItem("shouji",str1);
    localStorage.setItem("pingban",str2);
}