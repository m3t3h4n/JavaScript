var x = parseInt(window.prompt("Birinci sayıyı girin : "));
var y = parseInt(window.prompt("İkinci sayıyı girin : "));
function toplama(a,b){
    return a+b; //toplama fonksiyonunda dışarıdan gelen iki değer toplanıp tekrar dışarıya döndürüldü.
}
window.alert("İki sayının toplamı : "+toplama(x,y))